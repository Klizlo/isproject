--liquibase formatted sql
--changeset Klizlo:2

create table tag (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) UNIQUE NOT NULL
)