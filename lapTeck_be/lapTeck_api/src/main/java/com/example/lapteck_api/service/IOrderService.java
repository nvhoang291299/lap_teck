package com.example.lapteck_api.service;

import com.example.lapteck_api.entities.Order;
import com.example.lapteck_api.entities.Users;

import java.util.List;

public interface IOrderService {

    Order findByEmail(String email);

    Order findByUser(Users user);
}
