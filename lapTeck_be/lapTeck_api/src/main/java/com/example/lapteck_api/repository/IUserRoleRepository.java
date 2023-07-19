package com.example.lapteck_api.repository;

import com.example.lapteck_api.entities.UserRole;
import com.example.lapteck_api.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IUserRoleRepository extends JpaRepository<UserRole, Integer> {
    List<UserRole> findByUsers(Users users);
}
