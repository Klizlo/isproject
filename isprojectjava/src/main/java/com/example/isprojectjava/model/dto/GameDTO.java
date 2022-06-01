package com.example.isprojectjava.model.dto;

import com.example.isprojectjava.model.Developer;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Getter
@Builder
public class GameDTO {

    private Long id;
    private String title;
    private Long steamID;
    private Integer metacritic;
    private LocalDate releaseDate;
    private String price;
    private Integer requiredAge;
    private Long currentPlayerCount;

}
