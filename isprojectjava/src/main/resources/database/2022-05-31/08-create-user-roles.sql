--liquibase formatted sql
--changeset Klizlo:8

create table `user_roles` (
    user_id BIGINT,
    role_id BIGINT
);

Alter table `user_roles`
    add constraint user_role_id
    foreign key (role_id) references `role`(id);

Alter table `user_roles`
    add constraint role_user_id
    foreign key (user_id) references users(id);