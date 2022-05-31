package com.example.isprojectjava.repository;

import com.example.isprojectjava.model.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.Set;

@Repository
public interface TagsRepository extends JpaRepository<Tag, Long> {
    Optional<Set<Tag>> findAllByNameIn(Set<String> collect);
    Optional<Tag> findByName(String name);
}
