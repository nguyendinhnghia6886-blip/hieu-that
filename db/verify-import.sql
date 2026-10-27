-- No real user data is changed; all fixtures are rolled back.
begin;
insert into auth.users(id,email) values
('00000000-0000-4000-b000-000000000001','qa-import-a@hieu-that.invalid'),
('00000000-0000-4000-b000-000000000002','qa-import-b@hieu-that.invalid');
set local role authenticated;
do $$
declare q jsonb := '{"id":"qa-source-1","prompt":"Cùng đề","topic":"QA","type":"choice","options":["1","2","3","4"],"answer":1,"explanation":"Hướng dẫn","status":"draft"}';
 first_id text; result jsonb; other_id text; count_before int;
begin
 perform set_config('request.jwt.claim.sub','00000000-0000-4000-b000-000000000001',true);
 perform public.hieu_action('profile','{"name":"QA Import A","role":"teacher"}');
 result:=public.hieu_action('question',jsonb_build_object('content',q,'import_key','samples:qa-source-1'));
 first_id:=result->>'id';
 -- Manual edits and approval must survive repeated sample imports.
 perform public.hieu_action('question',jsonb_build_object('id',first_id,'content',q||'{"prompt":"Đã sửa riêng","status":"approved"}'::jsonb));
 result:=public.hieu_action('question',jsonb_build_object('content',q,'import_key','samples:qa-source-1'));
 if result->>'id'<>first_id or result->>'created'<>'false' then raise exception 'retry created a duplicate'; end if;
 result:=public.hieu_action('load');
 if jsonb_array_length(result->'questions')<>1 or result->'questions'->0->'content'->>'prompt'<>'Đã sửa riêng' or result->'questions'->0->'content'->>'status'<>'approved' then raise exception 'retry overwrote teacher edits'; end if;
 -- Same prompt, different source and choices must not be merged.
 result:=public.hieu_action('question',jsonb_build_object('content',q||'{"id":"qa-source-2","options":["5","6","7","8"]}'::jsonb,'import_key','samples:qa-source-2'));
 if result->>'id'=first_id then raise exception 'distinct questions merged'; end if;
 -- Legacy rows acquire a key without changing approval.
 result:=public.hieu_action('question',jsonb_build_object('content',q||'{"id":"legacy","status":"approved"}'::jsonb));
 other_id:=result->>'id';
 result:=public.hieu_action('question',jsonb_build_object('content',q||'{"id":"legacy"}'::jsonb,'import_key','samples:legacy'));
 if result->>'id'<>other_id then raise exception 'legacy row duplicated'; end if;
 -- Another teacher has an independent copy, and cannot update the first.
 perform set_config('request.jwt.claim.sub','00000000-0000-4000-b000-000000000002',true);
 perform public.hieu_action('profile','{"name":"QA Import B","role":"teacher"}');
 result:=public.hieu_action('question',jsonb_build_object('content',q,'import_key','samples:qa-source-1'));
 if result->>'id'=first_id then raise exception 'cross-teacher source collision'; end if;
 begin
   perform public.hieu_action('question',jsonb_build_object('id',first_id,'content',q));
   raise exception 'cross-teacher update accepted';
 exception when insufficient_privilege then null; end;
 result:=public.hieu_action('load');
 count_before:=jsonb_array_length(result->'questions');
 if count_before<>1 then raise exception 'another teacher question leaked'; end if;
 begin
   perform public.hieu_action('question',jsonb_build_object('content',q,'import_key','invalid/key'));
   raise exception 'invalid import key accepted' using errcode='XX000';
 exception when raise_exception then null; end;
end $$;
rollback;
select 'passed: source identity, safe retry, preserved edits, distinct choices, legacy adoption, teacher ownership' as verification;
