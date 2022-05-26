package com.example.isprojectjava.exception;

public class InvalidEmailException extends RuntimeException {
    public InvalidEmailException(String username) {
        super("Email " + username + " is invalid");
    }
}
