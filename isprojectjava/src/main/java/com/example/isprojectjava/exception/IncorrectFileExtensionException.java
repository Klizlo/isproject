package com.example.isprojectjava.exception;

public class IncorrectFileExtensionException extends RuntimeException {
    public IncorrectFileExtensionException(String name) {

        super("Incorrect " + name + "file extension");

    }
}
