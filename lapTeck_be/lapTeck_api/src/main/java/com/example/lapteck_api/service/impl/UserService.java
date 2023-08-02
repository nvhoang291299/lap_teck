package com.example.lapteck_api.service.impl;

import com.example.lapteck_api.entities.Users;
import com.example.lapteck_api.repository.IUserRepository;
import com.example.lapteck_api.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {

    @Autowired
    private IUserRepository userRepository;

    @Override
    public Users findById(int idUser) {
        return userRepository.findById(idUser).get();
    }

    @Override
    public Users findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
