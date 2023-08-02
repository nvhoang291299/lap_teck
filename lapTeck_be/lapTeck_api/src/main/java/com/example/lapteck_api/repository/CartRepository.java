package com.example.lapteck_api.repository;

import com.example.lapteck_api.entities.Cart;
import com.example.lapteck_api.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    Cart findByUser(Users user);
}
