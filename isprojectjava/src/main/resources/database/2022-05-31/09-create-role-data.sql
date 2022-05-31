--liquibase formatted sql
--changeset Klizlo:9

INSERT INTO role VALUES(1, 'USER');
INSERT INTO role VALUES(2, 'MANAGER');
INSERT INTO role VALUES(3, 'ADMIN');