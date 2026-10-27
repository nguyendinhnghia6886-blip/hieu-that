-- Application tables are not exposed through the Data API. All actions use the
-- authenticated RPC below; its private implementation checks ownership itself.
create schema if not exists hieu_private;
revoke all on schema hieu_private from public, anon;
create table if not exists hieu_private.profiles (
 id uuid primary key references auth.users(id) on delete cascade,
 name text not null check(length(name) between 1 and 80),
 role text not null check(role in ('teacher','student')),
 code text unique,
 created_at timestamptz not null default now()
);
create table if not exists hieu_private.memberships (
 teacher_id uuid not null references hieu_private.profiles(id) on delete cascade,
 student_id uuid not null references hieu_private.profiles(id) on delete cascade,
 primary key(teacher_id,student_id), created_at timestamptz default now()
);
create index if not exists membership_student on hieu_private.memberships(student_id);
create table if not exists hieu_private.questions (
 id uuid primary key default gen_random_uuid(), teacher_id uuid not null references hieu_private.profiles(id),
 content jsonb not null, updated_at timestamptz default now()
);
create index if not exists question_teacher on hieu_private.questions(teacher_id);
alter table hieu_private.questions add column if not exists source_key text;
create unique index if not exists question_source_teacher on hieu_private.questions(teacher_id,source_key);
create table if not exists hieu_private.assignments (
 id uuid primary key default gen_random_uuid(), teacher_id uuid not null references hieu_private.profiles(id),
 title text not null, instructions text not null default '', due timestamptz,
 questions jsonb not null, created_at timestamptz default now()
);
create index if not exists assignment_teacher on hieu_private.assignments(teacher_id);
create table if not exists hieu_private.submissions (
 id uuid primary key default gen_random_uuid(), assignment_id uuid not null references hieu_private.assignments(id),
 student_id uuid not null references hieu_private.profiles(id), answers jsonb not null,
 marks jsonb not null default '{}', feedback text not null default '',
 score numeric, pending integer not null, created_at timestamptz default now(), reviewed_at timestamptz,
 unique(assignment_id,student_id)
);
create index if not exists submission_student on hieu_private.submissions(student_id);
alter table hieu_private.profiles enable row level security;
alter table hieu_private.memberships enable row level security;
alter table hieu_private.questions enable row level security;
alter table hieu_private.assignments enable row level security;
alter table hieu_private.submissions enable row level security;
revoke all on all tables in schema hieu_private from public, anon, authenticated;

create or replace function hieu_private.run(action text, payload jsonb default '{}')
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
 uid uuid := auth.uid(); me hieu_private.profiles; a hieu_private.assignments;
 s hieu_private.submissions; q jsonb; qs jsonb := '[]'; answers jsonb := '[]';
 item jsonb; response jsonb; n integer; points numeric := 0; pending_count integer := 0;
 ident uuid; teacher uuid; mark numeric; result jsonb; ids jsonb; import_key text;
begin
 if uid is null then raise exception 'Bạn cần đăng nhập.' using errcode='42501'; end if;
 if payload is null or jsonb_typeof(payload) <> 'object' or length(payload::text)>200000 then raise exception 'Dữ liệu không hợp lệ.'; end if;
 select * into me from hieu_private.profiles where id=uid;
 if action='profile' then
   if me.id is not null then return to_jsonb(me); end if;
   if coalesce(payload->>'role','') not in ('teacher','student') or length(trim(coalesce(payload->>'name',''))) not between 1 and 80 then raise exception 'Nhập tên và chọn vai trò hợp lệ.'; end if;
   insert into hieu_private.profiles(id,name,role,code) values(uid,trim(payload->>'name'),payload->>'role',case when payload->>'role'='teacher' then 'GV-'||upper(substr(replace(gen_random_uuid()::text,'-',''),1,12)) end) returning * into me;
   return to_jsonb(me);
 end if;
 if action='load' and me.id is null then return jsonb_build_object('profile',null); end if;
 if me.id is null then raise exception 'Hãy hoàn tất hồ sơ trước.'; end if;
 if action='load' then
   select jsonb_build_object('profile',to_jsonb(me),
    'questions',coalesce((select jsonb_agg(jsonb_build_object('id',x.id,'content',x.content,'source_key',x.source_key) order by x.updated_at desc) from hieu_private.questions x where x.teacher_id=uid),'[]'::jsonb),
    'members',coalesce((select jsonb_agg(jsonb_build_object('name',p.name,'id',p.id,'code',p.code)) from hieu_private.memberships m join hieu_private.profiles p on p.id=case when me.role='teacher' then m.student_id else m.teacher_id end where (me.role='teacher' and m.teacher_id=uid) or (me.role='student' and m.student_id=uid)),'[]'::jsonb),
    'assignments',coalesce((select jsonb_agg(jsonb_build_object('id',x.id,'teacher_id',x.teacher_id,'title',x.title,'instructions',x.instructions,'due',x.due,'created_at',x.created_at,'questions',case when x.teacher_id=uid then x.questions else (select jsonb_agg(v - 'answer' - 'explanation' order by ord) from jsonb_array_elements(x.questions) with ordinality as j(v,ord)) end) order by x.created_at desc) from hieu_private.assignments x where x.teacher_id=uid or exists(select 1 from hieu_private.memberships m where m.teacher_id=x.teacher_id and m.student_id=uid)),'[]'::jsonb),
    'submissions',coalesce((select jsonb_agg(to_jsonb(x)||jsonb_build_object('student_name',p.name,'title',y.title) order by x.created_at desc) from hieu_private.submissions x join hieu_private.assignments y on y.id=x.assignment_id join hieu_private.profiles p on p.id=x.student_id where x.student_id=uid or y.teacher_id=uid),'[]'::jsonb)
   ) into result;
   return result;
 elsif action='join' then
   if me.role<>'student' then raise exception 'Chỉ học sinh tham gia bằng mã giáo viên.'; end if;
   select id into teacher from hieu_private.profiles where role='teacher' and code=upper(trim(payload->>'code'));
   if teacher is null then raise exception 'Không tìm thấy mã giáo viên.'; end if;
   if (select count(*) from hieu_private.memberships where student_id=uid)>=20 then raise exception 'Đã đạt giới hạn 20 giáo viên.'; end if;
   insert into hieu_private.memberships(teacher_id,student_id) values(teacher,uid) on conflict do nothing;
   return jsonb_build_object('ok',true);
 elsif action='question' then
   if me.role<>'teacher' then raise exception 'Chỉ giáo viên được soạn bài.' using errcode='42501'; end if;
   q:=payload->'content';
   if jsonb_typeof(q) is distinct from 'object' or length(trim(coalesce(q->>'prompt',''))) not between 1 and 5000 or length(trim(coalesce(q->>'topic',''))) not between 1 and 120 or coalesce(q->>'type','') not in ('choice','written') or coalesce(q->>'status','') not in ('draft','approved') then raise exception 'Nội dung câu hỏi không hợp lệ.'; end if;
   if length(coalesce(q->>'explanation',''))>5000 or length(coalesce(q->>'hint',''))>1000 then raise exception 'Lời giải hoặc gợi ý quá dài.'; end if;
   if q->>'status'='approved' then
     if length(trim(coalesce(q->>'explanation','')))=0 then raise exception 'Cần lời giải trước khi duyệt.'; end if;
     if q->>'type'='choice' then
       if jsonb_typeof(q->'options') is distinct from 'array' then raise exception 'Cần 4 lựa chọn.'; end if;
       if jsonb_array_length(q->'options')<>4 or (select count(distinct lower(trim(value))) from jsonb_array_elements_text(q->'options'))<>4 or exists(select 1 from jsonb_array_elements_text(q->'options') where length(trim(value)) not between 1 and 1000) or coalesce(q->>'answer','') !~ '^[0-3]$' then raise exception 'Kiểm tra 4 lựa chọn và đáp án đúng.'; end if;
     end if;
   end if;
   if nullif(payload->>'id','') is null then
     import_key:=nullif(payload->>'import_key','');
     if import_key is not null and import_key !~ '^(samples|local):[A-Za-z0-9_.:%-]{1,180}$' then raise exception 'Mã nguồn câu hỏi không hợp lệ.'; end if;
     -- Serialize creation per teacher, including retries and requests from other tabs.
     perform 1 from hieu_private.profiles where id=uid for update;
     if import_key is not null then
       select id into ident from hieu_private.questions where teacher_id=uid and source_key=import_key;
       if ident is not null then return jsonb_build_object('id',ident,'created',false); end if;
       -- Adopt an exact legacy import without overwriting its edits or approval.
       select id into ident from hieu_private.questions where teacher_id=uid and source_key is null and nullif(q->>'id','') is not null and content->>'id'=q->>'id' and content->>'type'=q->>'type' and content->>'prompt'=q->>'prompt' and coalesce(content->'options','[]'::jsonb)=coalesce(q->'options','[]'::jsonb) order by updated_at,id limit 1;
       if ident is not null then
         update hieu_private.questions set source_key=import_key where id=ident;
         return jsonb_build_object('id',ident,'created',false);
       end if;
     end if;
     if (select count(*) from hieu_private.questions where teacher_id=uid)>=500 then raise exception 'Kho câu hỏi đã đạt 500 câu.'; end if;
     insert into hieu_private.questions(teacher_id,content,source_key) values(uid,q,import_key) returning id into ident;
   else
     update hieu_private.questions set content=q,updated_at=now() where id=(payload->>'id')::uuid and teacher_id=uid returning id into ident;
     if ident is null then raise exception 'Không tìm thấy câu hỏi của bạn.' using errcode='42501'; end if;
   end if;
   return jsonb_build_object('id',ident);
 elsif action='publish' then
   if me.role<>'teacher' then raise exception 'Chỉ giáo viên được giao bài.' using errcode='42501'; end if;
   ids:=payload->'ids';
   if jsonb_typeof(ids) is distinct from 'array' then raise exception 'Chọn câu hỏi để giao.'; end if;
   if jsonb_array_length(ids) not between 1 and 30 or length(trim(coalesce(payload->>'title',''))) not between 1 and 160 or length(coalesce(payload->>'instructions',''))>2000 then raise exception 'Tên bài hoặc số câu không hợp lệ.'; end if;
   if (select count(distinct value) from jsonb_array_elements_text(ids))<>jsonb_array_length(ids) then raise exception 'Câu hỏi bị trùng.'; end if;
   for item in select value from jsonb_array_elements(ids) loop
     select content||jsonb_build_object('id',id) into q from hieu_private.questions where id=(item#>>'{}')::uuid and teacher_id=uid and content->>'status'='approved';
     if q is null then raise exception 'Chỉ được giao câu đã duyệt của bạn.'; end if;
     qs:=qs||jsonb_build_array(q);
   end loop;
   insert into hieu_private.assignments(teacher_id,title,instructions,due,questions) values(uid,trim(payload->>'title'),coalesce(payload->>'instructions',''),nullif(payload->>'due','')::timestamptz,qs) returning id into ident;
   return jsonb_build_object('id',ident);
 elsif action='submit' then
   if me.role<>'student' then raise exception 'Chỉ học sinh nộp bài.' using errcode='42501'; end if;
   select * into a from hieu_private.assignments where id=(payload->>'id')::uuid;
   if a.id is null or not exists(select 1 from hieu_private.memberships where teacher_id=a.teacher_id and student_id=uid) then raise exception 'Bạn không có quyền làm bài này.' using errcode='42501'; end if;
   select * into s from hieu_private.submissions where assignment_id=a.id and student_id=uid;
   if s.id is not null then return to_jsonb(s); end if;
   if a.due is not null and now()>a.due then raise exception 'Bài đã quá hạn nộp.'; end if;
   if jsonb_typeof(payload->'responses') is distinct from 'object' then raise exception 'Bài làm không hợp lệ.'; end if;
   for q in select value from jsonb_array_elements(a.questions) loop
     response:=payload->'responses'->(q->>'id');
     if q->>'type'='choice' then
       if response is null or jsonb_typeof(response)<>'number' or response::text !~ '^[0-3]$' then raise exception 'Hãy chọn đáp án cho từng câu.'; end if;
       if response=q->'answer' then points:=points+1; end if;
     else
       if response is null or jsonb_typeof(response)<>'string' or length(trim(response#>>'{}')) not between 1 and 8000 then raise exception 'Hãy hoàn thành phần tự luận (tối đa 8.000 ký tự).'; end if;
       pending_count:=pending_count+1;
     end if;
     answers:=answers||jsonb_build_array(jsonb_build_object('questionId',q->>'id','prompt',q->>'prompt','type',q->>'type','response',response,'options',q->'options','correct',case when q->>'type'='choice' then response=q->'answer' else null end,'explanation',q->>'explanation'));
   end loop;
   insert into hieu_private.submissions(assignment_id,student_id,answers,pending,score) values(a.id,uid,answers,pending_count,case when pending_count=0 then round(10*points/jsonb_array_length(a.questions),1) end) on conflict(assignment_id,student_id) do nothing returning * into s;
   if s.id is null then select * into s from hieu_private.submissions where assignment_id=a.id and student_id=uid; end if;
   return to_jsonb(s);
 elsif action='mark' then
   select x.* into s from hieu_private.submissions x join hieu_private.assignments y on y.id=x.assignment_id where x.id=(payload->>'id')::uuid and y.teacher_id=uid for update of x;
   if me.role<>'teacher' or s.id is null then raise exception 'Bạn không có quyền chấm bài này.' using errcode='42501'; end if;
   if jsonb_typeof(payload->'marks') is distinct from 'object' or length(coalesce(payload->>'feedback',''))>3000 then raise exception 'Điểm hoặc nhận xét không hợp lệ.'; end if;
   for q in select value from jsonb_array_elements(s.answers) loop
     if q->>'type'='choice' then if q->>'correct'='true' then points:=points+1; end if;
     else
       response:=payload->'marks'->(q->>'questionId');
       if response is null then pending_count:=pending_count+1;
       else
         if jsonb_typeof(response)<>'number' then raise exception 'Điểm tự luận phải là số từ 0 đến 1.'; end if;
         mark:=(response::text)::numeric;
         if mark<0 or mark>1 then raise exception 'Điểm tự luận phải từ 0 đến 1.'; end if;
         points:=points+mark;
       end if;
     end if;
   end loop;
   update hieu_private.submissions set marks=payload->'marks',feedback=coalesce(payload->>'feedback',''),pending=pending_count,score=case when pending_count=0 then round(10*points/jsonb_array_length(s.answers),1) end,reviewed_at=now() where id=s.id returning * into s;
   return to_jsonb(s);
 end if;
 raise exception 'Thao tác không được hỗ trợ.';
end $$;
revoke all on function hieu_private.run(text,jsonb) from public, anon;
grant usage on schema hieu_private to authenticated;
grant execute on function hieu_private.run(text,jsonb) to authenticated;
create or replace function public.hieu_action(action text,payload jsonb default '{}')
returns jsonb language sql security invoker set search_path='' as $$ select hieu_private.run(action,payload); $$;
revoke all on function public.hieu_action(text,jsonb) from public,anon;
grant execute on function public.hieu_action(text,jsonb) to authenticated;
