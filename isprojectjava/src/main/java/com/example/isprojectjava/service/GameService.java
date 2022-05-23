package com.example.isprojectjava.service;

import com.example.isprojectjava.exception.GameNotFoundException;
import com.example.isprojectjava.exception.TagNotFoundException;
import com.example.isprojectjava.model.Game;
import com.example.isprojectjava.model.Tag;
import com.example.isprojectjava.repository.GameRepository;
import com.example.isprojectjava.repository.TagsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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

    public List<Game> findAllGames() {
        return gameRepository.findAll();
    }

    @Transactional
    public Game addGame(Game game) {

        Set<Tag> tags = tagsRepository.findAllByNameIn(game.getTags().stream()
                .map(Tag::getName)
                .collect(Collectors.toSet())).orElseThrow(TagNotFoundException::new);

        game.setTags(new HashSet<>());

        gameRepository.save(game);

        game.addTags(tags);

        return game;
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

    public Game findSingleGame(Long id) {
        return gameRepository.findById(id).orElseThrow(GameNotFoundException::new);
    }
}
