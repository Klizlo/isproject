package com.example.isprojectjava.model;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @XmlElement
    private Long id;
    @XmlElement
    private String name;
    @XmlElement
    private Float rate;
    @XmlElement
    private LocalDate release;
    @XmlElement
    private String developer;
    @XmlElement
    private Long soldCopies;

    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinTable(name = "game_tags", joinColumns = @JoinColumn(name = "game_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id"))
    @XmlElement
    Set<Tag> tags = new HashSet<>();

    public void addTags(Set<Tag> tags) {
        this.tags = tags;
        tags.stream().map(Tag::getGames).forEach(g -> g.add(this));
    }

    @Override
    public String toString() {
        return "{" +
                "\"name\": \"" + name + "\"," +
                "\"rate\": \"" + rate + "\"," +
                "\"release\": \"" + release + "\"," +
                "}";
    }
}
