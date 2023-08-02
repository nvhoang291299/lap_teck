package com.example.lapteck_api.service;

import com.example.lapteck_api.dto.CartDTO;
import com.example.lapteck_api.entities.Cart;
import com.example.lapteck_api.entities.IndexCart;
import com.example.lapteck_api.entities.Users;

import java.util.List;

public interface ICartService {

    List<CartDTO> listCard(String email);

    Cart findByUser(Users user);
}
