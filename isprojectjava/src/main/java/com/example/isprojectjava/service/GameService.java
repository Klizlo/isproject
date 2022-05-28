package com.example.isprojectjava.service;

import com.example.isprojectjava.exception.GameNotFoundException;
import com.example.isprojectjava.exception.IncorrectFileExtensionException;
import com.example.isprojectjava.exception.ListOfGamesIsEmptyException;
import com.example.isprojectjava.exception.TagNotFoundException;
import com.example.isprojectjava.model.Game;
import com.example.isprojectjava.model.Tag;
import com.example.isprojectjava.repository.GameRepository;
import com.example.isprojectjava.repository.TagsRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class GameService {

    private final GameRepository gameRepository;
    private final TagsRepository tagsRepository;
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
                .map(String::toUpperCase)
                .collect(Collectors.toSet())).orElseThrow(TagNotFoundException::new);

        game.addTags(tags);
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
                            .anyMatch(t2 -> t2 != null && t2.toUpperCase().equals(t.getName())))
                    .collect(Collectors.toSet());

            g.setTags(tagsForGame);
            gameRepository.save(g);
        }

        return games;
    }

    @Transactional
    public Game updateGame(Long id, Game game) {

        Game editedGame = gameRepository.findById(id).orElseThrow(GameNotFoundException::new);

        editedGame.setName(game.getName());
        editedGame.setRate(game.getRate());
        editedGame.setDeveloper(game.getDeveloper());
        editedGame.setRelease(game.getRelease());
        editedGame.setSoldCopies(game.getSoldCopies());

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
