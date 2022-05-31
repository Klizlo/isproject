package com.example.isprojectjava.exception;

public class DevelopersListIsEmptyException extends RuntimeException {

    public DevelopersListIsEmptyException() {
        super("Developer list is empty");
    }
}
