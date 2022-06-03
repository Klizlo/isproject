package com.example.isprojectjava.controller;

import com.example.isprojectjava.model.Tag;
import com.example.isprojectjava.service.TagService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TagController {

    private final TagService tagService;

    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/tags")
    public List<Tag> findAllTags(){
        return tagService.findAllTags();
    }

}
