--liquibase formatted sql
--changeset Klizlo:6

create table `game_tags` (
    game_id BIGINT,
    tag_id BIGINT
);

Alter table `game_tags`
    add constraint game_tag_id
    foreign key (tag_id) references tag(id);

Alter table `game_tags`
    add constraint tag_game_id
    foreign key (game_id) references game(id);