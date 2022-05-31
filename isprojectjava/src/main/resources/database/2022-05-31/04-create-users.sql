--liquibase formatted sql
--changeset Klizlo:4

create table users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(150) NOT NULL
)