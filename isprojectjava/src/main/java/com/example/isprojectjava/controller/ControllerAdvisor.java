package com.example.isprojectjava.controller;

import com.example.isprojectjava.exception.GameNotFoundException;
import org.springframework.http.HttpRequest;
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

}
