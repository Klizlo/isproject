package com.example.isprojectjava.controller;

import com.example.isprojectjava.exception.*;
import org.apache.commons.fileupload.FileUploadBase;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;

@ControllerAdvice
public class ControllerAdvisor extends ResponseEntityExceptionHandler {

    @ExceptionHandler(GameNotFoundException.class)
    public ResponseEntity<Object> gameNotFoundExceptionHandler(
            GameNotFoundException ex, WebRequest request
    ){
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("time:", LocalDateTime.now());
        map.put("msg:", ex.getMessage());

        return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(TagNotFoundException.class)
    public ResponseEntity<Object> tagNotFoundExceptionHandler(
            TagNotFoundException ex, WebRequest request
    ){
        Map<String, Object> map = new LinkedHashMap<>();

        map.put("time:", LocalDateTime.now());
        map.put("msg", ex.getMessage());

        return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(DevelopersListIsEmptyException.class)
    public ResponseEntity<Object> developersListIsEmptyExceptionHandler(
            DevelopersListIsEmptyException ex, WebRequest request
    ){
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("time:", LocalDateTime.now());
        map.put("msg:", ex.getMessage());

        return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<Object> userNotFoundExceptionHandler(
            UserNotFoundException ex, WebRequest request
    ){
        Map<String, Object> map = new LinkedHashMap<>();

        map.put("time:", LocalDateTime.now());
        map.put("msg:", ex.getMessage());

        return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(RoleNotFoundException.class)
    public ResponseEntity<Object> roleNotFoundExceptionHandler(
            RoleNotFoundException ex, WebRequest request
    ){
        Map<String, Object> map = new LinkedHashMap<>();

        map.put("time:", LocalDateTime.now());
        map.put("msg:", ex.getMessage());

        return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(InvalidEmailException.class)
    public ResponseEntity<Object> invalidEmailExceptionHandler(
            InvalidEmailException ex, WebRequest request
    ){
        Map<String, Object> map = new LinkedHashMap<>();

        map.put("time:", LocalDateTime.now());
        map.put("msg:", ex.getMessage());

        return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(IncorrectFileExtensionException.class)
    public ResponseEntity<Object> incorrectFileExtensionExceptionHandler(
            IncorrectFileExtensionException ex, WebRequest request
    ){
        Map<String, Object> map = new LinkedHashMap<>();

        map.put("time:", LocalDateTime.now());
        map.put("msg:", ex.getMessage());

        return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(FileUploadBase.SizeLimitExceededException.class)
    public ResponseEntity<Object> sizeLimitExceededExceptionHandler(
            FileUploadBase.SizeLimitExceededException ex, WebRequest request
    ){
        Map<String, Object> map = new LinkedHashMap<>();

        map.put("time:", LocalDateTime.now());
        map.put("msg:", "File size is too big");

        return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ListOfGamesIsEmptyException.class)
    public ResponseEntity<Object> listOfGamesISEmptyExceptionHandler(
            ListOfGamesIsEmptyException ex, WebRequest request
    ){
        Map<String, Object> map = new LinkedHashMap<>();

        map.put("time:", LocalDateTime.now());
        map.put("msg:", ex.getMessage());

        return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
    }

}
