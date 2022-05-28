package com.example.isprojectjava.exception;

public class ListOfGamesIsEmptyException extends RuntimeException {

    public ListOfGamesIsEmptyException() {
        super("The list of games is empty");
    }
}
