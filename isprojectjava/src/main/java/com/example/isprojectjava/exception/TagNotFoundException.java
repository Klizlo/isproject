package com.example.isprojectjava.exception;

public class TagNotFoundException extends RuntimeException{

    public TagNotFoundException() {
        super("Tag not found");
    }
}
