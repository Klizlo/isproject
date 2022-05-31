--liquibase formatted sql
--changeset Klizlo:1

CREATE TABLE GAME (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
    steamID BIGINT NOT NULL,
    metacritic INT,
    releaseDate timestamp,
    price VARCHAR(10),
    requiredAge INT,
    currentPlayerCount BIGINT
);