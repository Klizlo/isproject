package com.example.isprojectjava.exception;


public class GameNotFoundException extends RuntimeException {

    public GameNotFoundException() {
        super("Game not found");
    }
}
