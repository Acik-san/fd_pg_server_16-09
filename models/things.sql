CREATE TABLE things(
  id serial primary key,
  body text not null check(body != ''),
  author varchar(64) default 'anonim',
  "createAt" timestamp not null default current_timestamp,
  "updateAt" timestamp not null default current_timestamp
)