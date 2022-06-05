package com.example.isprojectjava.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.xml.bind.annotation.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@XmlRootElement(name = "tags")
@XmlAccessorType(XmlAccessType.FIELD)
@Table(name = "tag")
public class Tag {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @XmlElement
    private Long id;
    @Column(unique = true)
    @XmlElement
    private String name;

    @JsonIgnore
    @XmlTransient
    @ManyToMany(mappedBy = "tags")
    Set<Game> games = new HashSet<>();

    @Override
    public String toString() {
        return "{" +
                "\"id\": " + id + "," +
                "\"title\": \"" + name + "\"," +
                "}";
    }

}
