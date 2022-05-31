--liquibase formatted sql
--changeset Klizlo:5

create table `role` (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) UNIQUE NOT NULL
)