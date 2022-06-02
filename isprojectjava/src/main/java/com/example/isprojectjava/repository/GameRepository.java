package com.example.isprojectjava.repository;

import com.example.isprojectjava.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

    @Query("SELECT g.steamID from Game g")
    List<Long> findAllSteamIDs();
}
