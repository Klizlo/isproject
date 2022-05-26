package com.example.isprojectjava.controller;

import com.example.isprojectjava.model.Game;
import com.example.isprojectjava.service.GameService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class GameController {

    private final GameService gameService;

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/games")
    public List<Game> findAllGames(){
        return gameService.findAllGames();
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/games/{id}")
    public Game findSingleGame(@PathVariable Long id){
        return gameService.findSingleGame(id);
    }

    @PreAuthorize("hasRole('MANAGER')")
    @PostMapping("/games")
    public Game addGame(@RequestBody Game game){
        return gameService.addGame(game);
    }

    @PreAuthorize("hasRole('MANAGER')")
    @PostMapping("/games/list")
    public List<Game> addGamesFromFile(@RequestBody List<Game> games){
        return gameService.addGamesFromFile(games);
    }

    @PreAuthorize("hasRole('MANAGER')")
    @PutMapping("/games/{id}")
    public Game updateGame(@PathVariable Long id, @RequestBody Game game){
        return gameService.updateGame(id, game);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/games/{id}")
    public void deleteGame(@PathVariable Long id){
        gameService.deleteGame(id);
    }

}
