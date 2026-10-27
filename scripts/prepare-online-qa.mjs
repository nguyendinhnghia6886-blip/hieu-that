// Temporary, synthetic auth fixtures. Output stays in git-ignored .vercel/.
import { randomBytes, randomUUID } from "node:crypto";
import { writeFileSync } from "node:fs";
const users = ["teacher", "student", "outsider", "teacher-other"].map(
  (role) => ({
    id: randomUUID(),
    email: `qa-${role}-${randomBytes(6).toString("hex")}@hieu-that.invalid`,
    password: randomBytes(24).toString("hex"),
    role,
  }),
);
writeFileSync(".vercel/qa-users.json", JSON.stringify(users));
const sql = users
  .map(
    (u) => `
insert into auth.users (id,instance_id,aud,role,email,encrypted_password,email_confirmed_at,confirmation_token,recovery_token,email_change_token_new,email_change,raw_app_meta_data,raw_user_meta_data,created_at,updated_at)
values ('${u.id}','00000000-0000-0000-0000-000000000000','authenticated','authenticated','${u.email}',extensions.crypt('${u.password}',extensions.gen_salt('bf')),now(),'','','','','{"provider":"email","providers":["email"]}','{}',now(),now());
insert into auth.identities(provider_id,user_id,identity_data,provider,created_at,updated_at)
values ('${u.id}','${u.id}','{"sub":"${u.id}","email":"${u.email}","email_verified":true}','email',now(),now());`,
  )
  .join("\n");
writeFileSync(".vercel/qa-create.sql", `begin;${sql}\ncommit;`);
const ids = users.map((u) => `'${u.id}'`).join(",");
writeFileSync(
  ".vercel/qa-cleanup.sql",
  `begin;
delete from hieu_private.submissions where student_id in (${ids}) or assignment_id in (select id from hieu_private.assignments where teacher_id in (${ids}));
delete from hieu_private.assignments where teacher_id in (${ids});
delete from hieu_private.questions where teacher_id in (${ids});
delete from auth.users where id in (${ids}) and email like 'qa-%@hieu-that.invalid';
commit;`,
);
console.log("Prepared four isolated synthetic users and exact-ID cleanup.");
