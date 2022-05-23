package com.example.isprojectjava.controller;

import com.example.isprojectjava.model.Game;
import com.example.isprojectjava.service.GameService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class GameController {

    private final GameService gameService;

    @GetMapping("/games")
    public List<Game> findAllGames(){
        return gameService.findAllGames();
    }

    @GetMapping("/games/{id}")
    public Game findSingleGame(@PathVariable Long id){
        return gameService.findSingleGame(id);
    }

    @PostMapping("/games")
    public Game addGame(@RequestBody Game game){
        return gameService.addGame(game);
    }

    @PutMapping("/games/{id}")
    public Game updateGame(@PathVariable Long id, @RequestBody Game game){
        return gameService.updateGame(id, game);
    }

    @DeleteMapping("/games/{id}")
    public void deleteGame(@PathVariable Long id){
        gameService.deleteGame(id);
    }

}
