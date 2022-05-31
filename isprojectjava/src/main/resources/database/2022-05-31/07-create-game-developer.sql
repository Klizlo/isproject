--liquibase formatted sql
--changeset Klizlo:7

create table `game_developers` (
    game_id BIGINT,
    developer_id BIGINT
);

Alter table `game_developers`
    add constraint game_developers_id
    foreign key (developer_id) references developer(id);

Alter table `game_developers`
    add constraint developers_game_id
    foreign key (game_id) references game(id);