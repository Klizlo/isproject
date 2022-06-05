package com.example.isprojectjava.model;


import com.example.isprojectjava.config.LocalDateAdapter;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
@Table(name = "game")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @XmlElement
    private Long id;
    @XmlElement
    private String title;
    @XmlElement
    @Column(nullable = false, unique = true)
    private Long steamID;
    @XmlElement
    private Integer metacritic;
    @XmlElement
    @XmlJavaTypeAdapter(value = LocalDateAdapter.class)
    private LocalDate releaseDate;
    @XmlElement
    private String price;
    @XmlElement
    private Integer requiredAge;
    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinTable(name = "game_developers", joinColumns = @JoinColumn(name = "game_id"),
            inverseJoinColumns = @JoinColumn(name = "developer_id"))
    @XmlElement
    private Set<Developer> developers = new HashSet<>();
    @XmlElement
    private Long currentPlayerCount;
    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JoinTable(name = "game_tags", joinColumns = @JoinColumn(name = "game_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id"))
    @XmlElement
    Set<Tag> tags = new HashSet<>();

    public void addTags(Set<Tag> tags) {
        this.tags = tags;
        tags.stream().map(Tag::getGames).forEach(g -> g.add(this));
    }

    public void addDevelopers(Set<Developer> developers) {
        this.developers = developers;
        developers.stream().map(Developer::getGames).forEach(g -> g.add(this));
    }

    @Override
    public String toString() {
        return "{" +
                "\"id\": " + id + "," +
                "\"title\": \"" + title + "\"," +
                "\"steamID\": " + steamID + "," +
                "\"metacritic\": " + metacritic + "," +
                "\"releaseDate\": \"" + releaseDate + "\"," +
                "\"price\": \"" + price + "\"," +
                "\"requiredAge\": " + requiredAge + "," +
                "\"developers\": " + developers + "," +
                "\"currentPlayerCount\": " + currentPlayerCount + "," +
                "\"tags\": " + tags + "," +
                "}";
    }
}
