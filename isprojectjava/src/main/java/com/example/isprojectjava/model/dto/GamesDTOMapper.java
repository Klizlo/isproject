package com.example.isprojectjava.model.dto;

import com.example.isprojectjava.model.Game;

import java.util.List;
import java.util.stream.Collectors;

public class GamesDTOMapper {

    public GamesDTOMapper() {
    }

    public static List<GameDTO> mapToGameDtos(List<Game> games){
        return games.stream()
                .map(game -> mapToPostDto(game))
                .collect(Collectors.toList());
    }

    private static GameDTO mapToPostDto(Game game){
        return GameDTO.builder()
                .id(game.getId())
                .title(game.getTitle())
                .steamID(game.getSteamID())
                .metacritic(game.getMetacritic())
                .currentPlayerCount(game.getCurrentPlayerCount())
                .price(game.getPrice())
                .build();
    }
}
