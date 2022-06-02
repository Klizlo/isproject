package com.example.isprojectjava.service;

import com.example.isprojectjava.model.Tag;
import com.example.isprojectjava.repository.TagsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TagService {

    private final TagsRepository tagsRepository;

    public List<Tag> findAllTags() {
        return tagsRepository.findAll();
    }
}
