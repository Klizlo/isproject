--liquibase formatted sql
--changeset Klizlo:15

ALTER TABLE game
ADD CONSTRAINT UQ_game_steamid UNIQUE(steamID);