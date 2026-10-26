-- Synthetic users and application data are rolled back at the end.
begin;
insert into auth.users(id, email) values
 ('00000000-0000-4000-a000-000000000001','qa-teacher@hieu-that.invalid'),
 ('00000000-0000-4000-a000-000000000002','qa-student@hieu-that.invalid'),
 ('00000000-0000-4000-a000-000000000003','qa-other@hieu-that.invalid');
set local role authenticated;
do $$
declare p jsonb; q jsonb; w jsonb; a jsonb; s jsonb; result jsonb; code text;
begin
 perform set_config('request.jwt.claim.sub','00000000-0000-4000-a000-000000000001',true);
 p:=public.hieu_action('profile','{"name":"QA Teacher","role":"teacher"}');
 code:=p->>'code';
 q:=public.hieu_action('question','{"content":{"prompt":"1+1?","topic":"QA","type":"choice","options":["1","2","3","4"],"answer":1,"explanation":"1+1=2","status":"approved"}}');
 a:=public.hieu_action('publish',jsonb_build_object('title','QA Test','ids',jsonb_build_array(q->>'id')));
 perform set_config('request.jwt.claim.sub','00000000-0000-4000-a000-000000000002',true);
 perform public.hieu_action('profile','{"name":"QA Student","role":"student"}');
 perform public.hieu_action('join',jsonb_build_object('code',code));
 result:=public.hieu_action('load');
 if result->'assignments'->0->'questions'->0 ? 'answer' or result->'assignments'->0->'questions'->0 ? 'explanation' then raise exception 'TEST FAILED: answer leak'; end if;
 if jsonb_array_length(result->'questions')<>0 then raise exception 'TEST FAILED: teacher bank leak'; end if;
 s:=public.hieu_action('submit',jsonb_build_object('id',a->>'id','responses',jsonb_build_object(q->>'id',1)));
 if (s->>'score')::numeric<>10 then raise exception 'TEST FAILED: grading'; end if;
 result:=public.hieu_action('submit',jsonb_build_object('id',a->>'id','responses',jsonb_build_object(q->>'id',0)));
 if result->>'id'<>s->>'id' or (result->>'score')::numeric<>10 then raise exception 'TEST FAILED: duplicate mutation'; end if;
 begin
   perform public.hieu_action('question','{"content":{}}');
   raise exception 'TEST FAILED: student wrote teacher question';
 exception when insufficient_privilege then null; end;
 perform set_config('request.jwt.claim.sub','00000000-0000-4000-a000-000000000003',true);
 perform public.hieu_action('profile','{"name":"QA Other","role":"student"}');
 result:=public.hieu_action('load');
 if jsonb_array_length(result->'assignments')<>0 or jsonb_array_length(result->'submissions')<>0 then raise exception 'TEST FAILED: cross-account read'; end if;
 begin
   perform public.hieu_action('submit',jsonb_build_object('id',a->>'id','responses',jsonb_build_object(q->>'id',1)));
   raise exception 'TEST FAILED: unauthorized submission';
 exception when insufficient_privilege then null; end;
 if has_table_privilege('authenticated','hieu_private.assignments','select') then raise exception 'TEST FAILED: direct table access'; end if;
 if has_function_privilege('anon','public.hieu_action(text,jsonb)','execute') then raise exception 'TEST FAILED: anonymous RPC'; end if;
 perform set_config('request.jwt.claim.sub','00000000-0000-4000-a000-000000000001',true);
 result:=public.hieu_action('load');
 if jsonb_array_length(result->'submissions')<>1 then raise exception 'TEST FAILED: teacher cannot see submission'; end if;
 w:=public.hieu_action('question','{"content":{"prompt":"Giải thích 1+1","topic":"QA","type":"written","options":[],"explanation":"Đếm thêm một","status":"approved"}}');
 a:=public.hieu_action('publish',jsonb_build_object('title','QA mixed','ids',jsonb_build_array(q->>'id',w->>'id')));
 perform set_config('request.jwt.claim.sub','00000000-0000-4000-a000-000000000002',true);
 s:=public.hieu_action('submit',jsonb_build_object('id',a->>'id','responses',jsonb_build_object(q->>'id',1,w->>'id','Đếm thêm một')));
 if s->>'score' is not null or (s->>'pending')::int<>1 then raise exception 'TEST FAILED: written score must wait'; end if;
 perform set_config('request.jwt.claim.sub','00000000-0000-4000-a000-000000000001',true);
 result:=public.hieu_action('mark',jsonb_build_object('id',s->>'id','marks',jsonb_build_object(w->>'id',0.5)));
 if (result->>'score')::numeric<>7.5 or (result->>'pending')::int<>0 then raise exception 'TEST FAILED: written grading'; end if;
 result:=public.hieu_action('mark',jsonb_build_object('id',s->>'id','marks',jsonb_build_object(w->>'id',0)));
 if (result->>'score')::numeric<>5 then raise exception 'TEST FAILED: zero is a valid mark'; end if;
end $$;
rollback;
select 'passed: grading, duplicate protection, no answer leakage, role ownership, cross-account isolation, anonymous restrictions' as verification;
