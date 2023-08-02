package com.example.lapteck_api.service;

import com.example.lapteck_api.entities.Users;
import org.springframework.stereotype.Service;


public interface IUserService {
    Users findById(int idUser);

    Users findByEmail(String email);
}
