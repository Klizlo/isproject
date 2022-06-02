package com.example.isprojectjava.service;

import com.example.isprojectjava.exception.*;
import com.example.isprojectjava.model.Developer;
import com.example.isprojectjava.model.Game;
import com.example.isprojectjava.model.Tag;
import com.example.isprojectjava.repository.DeveloperRepository;
import com.example.isprojectjava.repository.GameRepository;
import com.example.isprojectjava.repository.TagsRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class GameService {

    private final GameRepository gameRepository;
    private final TagsRepository tagsRepository;
    private final DeveloperRepository developerRepository;
    private final FileService fileService;

    public List<Game> findAllGames() {
        return gameRepository.findAll();
    }

    public Game findSingleGame(Long id) {
        return gameRepository.findById(id).orElseThrow(GameNotFoundException::new);
    }

    @Transactional
    public Game addGame(Game game) {

        Set<Tag> tags = tagsRepository.findAllByNameIn(game.getTags().stream()
                .map(Tag::getName)
                .collect(Collectors.toSet())).orElseThrow(TagNotFoundException::new);

        Set<Developer> developers = new HashSet<>();

        for (Developer d: game.getDevelopers()) {
            d.setId(null);
            developers.add(developerRepository.findByName(d.getName()).orElseGet(() -> developerRepository.save(d)));
        }

        game.addTags(tags);
        game.addDevelopers(developers);
        gameRepository.save(game);

        return game;
    }

    @Transactional
    public List<Game> addListOfGames(List<Game> games) {

        if (games == null){
            throw new ListOfGamesIsEmptyException();
        }

        List<Tag> allTags = tagsRepository.findAll();

        for (Game g: games) {
            Set<Tag> tagsForGame = allTags.stream()
                    .filter(t -> g.getTags().stream()
                            .map(Tag::getName)
                            .anyMatch(t2 -> t2 != null && t2.equals(t.getName())))
                    .collect(Collectors.toSet());

            Set<Developer> developers = new HashSet<>();

            for (Developer d: g.getDevelopers()) {
                d.setId(null);
                developers.add(developerRepository.findByName(d.getName()).orElseGet(() -> developerRepository.save(d)));
            }

            g.setTags(tagsForGame);
            g.addDevelopers(developers);
            gameRepository.save(g);
        }

        return games;
    }

    @Transactional
    public Game updateGame(Long id, Game game) {

        Game editedGame = gameRepository.findById(id).orElseThrow(GameNotFoundException::new);

        editedGame.setTitle(game.getTitle());
        editedGame.setMetacritic(game.getMetacritic());
        editedGame.setReleaseDate(game.getReleaseDate());
        editedGame.setPrice(game.getPrice());
        editedGame.setRequiredAge(game.getRequiredAge());
        editedGame.setCurrentPlayerCount(game.getCurrentPlayerCount());
        editedGame.setDevelopers(game.getDevelopers());
        editedGame.setTags(game.getTags());

        return editedGame;
    }

    public void deleteGame(Long id) {
        gameRepository.delete(gameRepository.findById(id).orElseThrow(GameNotFoundException::new));
    }

    public void addGamesFromFile(MultipartFile multipartFile) {
        List<Game> games;
        if(FilenameUtils.getExtension(multipartFile.getOriginalFilename()).equals("json")){
            games = fileService.readJSONFile(multipartFile);
        }else if (FilenameUtils.getExtension(multipartFile.getOriginalFilename()).equals("xml")){
            games = fileService.readXMLFile(multipartFile);
        }else{
            throw new IncorrectFileExtensionException(multipartFile.getName());
        }

        addListOfGames(games);
    }

    public byte[] getJSONFile() {
        return fileService.getJSONFile(findAllGames());
    }

    public byte[] getXMLFile() {
        return fileService.getXMLFile(findAllGames());
    }

}
