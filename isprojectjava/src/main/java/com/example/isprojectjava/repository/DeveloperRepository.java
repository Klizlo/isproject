package com.example.isprojectjava.repository;

import com.example.isprojectjava.model.Developer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DeveloperRepository extends JpaRepository<Developer, Long> {

    Optional<Developer> findByName(String name);

    Optional<List<Developer>> findAllByNameIn(List<String> names);

}
