package com.example.isprojectjava.webservice;

import com.example.isprojectjava.model.Game;
import com.example.isprojectjava.model.Tag;
import com.example.isprojectjava.model.soap.GetStatisticsRequest;
import com.example.isprojectjava.model.soap.GetStatisticsResponse;
import com.example.isprojectjava.model.soap.Statistic;
import com.example.isprojectjava.model.soap.Statistics;
import com.example.isprojectjava.repository.GameRepository;
import com.example.isprojectjava.repository.TagsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Endpoint
@RequiredArgsConstructor
public class StatisticsEndpoint {

    private static final String NAMESPACE_URI = "http://example.com/isprojectjava/model/soap";

    private final GameRepository gameRepository;
    private final TagsRepository tagsRepository;

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getStatisticsRequest")
    @ResponsePayload
    public GetStatisticsResponse getStatistics(@RequestPayload GetStatisticsRequest request){

        List<Tag> tags = tagsRepository.findAll();
        List<Game> games = gameRepository.findAll();

        List<Statistic> numberOfPlayersByTag = numberOfPlayersByTag(games, tags);
        List<Statistic> numberOfGamesByPrice = numberOfGamesByPrice(games);
        List<Statistic> numberOfGamesByYear = numberOfGamesByYear(games);

        Statistics statistics = new Statistics();
        numberOfPlayersByTag.forEach(s -> statistics.getNumberOfPlayersByTag().add(s));
        numberOfGamesByPrice.forEach(s -> statistics.getNumberOfGamesByPrice().add(s));
        numberOfGamesByYear.forEach(s -> statistics.getNumberOfGamesByYear().add(s));

        GetStatisticsResponse response = new GetStatisticsResponse();
        response.setStatistics(statistics);

        return response;
    }

    private List<Statistic> numberOfGamesByYear(List<Game> games) {
        List<Statistic> list = new ArrayList<>();

        for (Integer year: games.stream()
                .map(Game::getReleaseDate)
                .map(LocalDate::getYear)
                .collect(Collectors.toSet())) {
            Statistic statistic = new Statistic();
            statistic.setKey(year.toString());
            statistic.setValue(games.stream()
                    .filter(g -> g.getReleaseDate().getYear() == year)
                    .count());
            list.add(statistic);
        }

        return list;
    }

    private List<Statistic> numberOfGamesByPrice(List<Game> games) {
        List<Statistic> list = new ArrayList<>();

        Statistic statistic = new Statistic();

        statistic.setKey("0,00 - 49,99");
        statistic.setValue(games.stream()
                .filter(g -> g.getPrice() != null && Pattern.compile("([0-4])?[0-9],.*")
                        .matcher(g.getPrice())
                        .matches())
                .count());
        list.add(statistic);

        statistic = new Statistic();

        statistic.setKey("50,00 - 99,99");
        statistic.setValue(games.stream()
                .filter(g -> g.getPrice() != null && Pattern.compile("[5-9][0-9],.*")
                        .matcher(g.getPrice())
                        .matches())
                .count());
        list.add(statistic);

        statistic = new Statistic();

        statistic.setKey("100,00 - 149,99");
        statistic.setValue(games.stream()
                .filter(g -> g.getPrice() != null && Pattern.compile("1[0-4][0-9],.*")
                        .matcher(g.getPrice())
                        .matches())
                .count());
        list.add(statistic);

        statistic = new Statistic();

        statistic.setKey("150,00 - 1999,99");
        statistic.setValue(games.stream()
                .filter(g -> g.getPrice() != null && Pattern.compile("1[5-9][0-9],.*")
                        .matcher(g.getPrice())
                        .matches())
                .count());
        list.add(statistic);

        statistic = new Statistic();

        statistic.setKey(">200,00");
        statistic.setValue(games.stream()
                .filter(g -> g.getPrice() != null && Pattern.compile("[2-9]+[0-9][0-9],.*")
                        .matcher(g.getPrice())
                        .matches())
                .count());
        list.add(statistic);

        return list;
    }

    private List<Statistic> numberOfPlayersByTag(List<Game> games, List<Tag> tags) {
        List<Statistic> list = new ArrayList<>();

        for (Tag tag: tags) {
            Statistic statistic = new Statistic();

            statistic.setKey(tag.getName());
            statistic.setValue(games.stream()
                    .filter(g -> g.getTags().stream()
                            .map(Tag::getName)
                            .anyMatch(gt -> gt.equals(tag.getName())))
                    .map(Game::getCurrentPlayerCount)
                    .reduce(0L, Long::sum));

            list.add(statistic);
        }

        return list;
    }

}
