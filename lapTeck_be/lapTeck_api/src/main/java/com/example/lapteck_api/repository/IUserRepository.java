package com.example.lapteck_api.repository;

import com.example.lapteck_api.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<Users, Integer> {
    Users findByEmail(String email);
}
