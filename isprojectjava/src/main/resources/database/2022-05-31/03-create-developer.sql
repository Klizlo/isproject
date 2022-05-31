--liquibase formatted sql
--changeset Klizlo:3

create table developer (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(250) UNIQUE NOT NULL
)