package com.example.isprojectjava.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
public class AuthToken {
    private String token;

    public AuthToken(String token) {
        this.token = token;
    }
}
