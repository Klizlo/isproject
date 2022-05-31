package com.example.isprojectjava.controller;

import com.example.isprojectjava.model.Game;
import com.example.isprojectjava.service.GameService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
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

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/games/file/json")
    public ResponseEntity<byte[]> getJSONFile(){
        byte[] jsonFile = gameService.getJSONFile();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=games.json")
                .contentType(MediaType.APPLICATION_JSON)
                .contentLength(jsonFile.length)
                .body(jsonFile);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/games/file/xml")
    public ResponseEntity<byte[]> getXMLFile(){
        byte[] xmlFile = gameService.getXMLFile();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=games.xml")
                .contentType(MediaType.APPLICATION_XML)
                .contentLength(xmlFile.length)
                .body(xmlFile);
    }

    @PreAuthorize("hasRole('MANAGER')")
    @PostMapping("/games")
    public Game addGame(@RequestBody Game game){
        return gameService.addGame(game);
    }

    @PreAuthorize("hasRole('MANAGER')")
    @PostMapping("/games/list")
    public List<Game> addListOfGames(@RequestBody List<Game> games){
        return gameService.addListOfGames(games);
    }

    @PreAuthorize("hasRole('MANAGER')")
    @PostMapping("/games/file")
    public void addGamesFromFile(@RequestParam("file") MultipartFile multipartFile){
        gameService.addGamesFromFile(multipartFile);
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
