package com.example.lapteck_api.controller;

import com.example.lapteck_api.entities.Users;
import com.example.lapteck_api.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    private IUserService userService;

    @GetMapping("/info")
    public ResponseEntity<?> info(@RequestParam(value = "email") String email){
        Users user = userService.findByEmail(email);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
