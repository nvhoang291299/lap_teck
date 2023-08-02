package com.example.lapteck_api.service;

import com.example.lapteck_api.entities.Order;

import java.util.List;

public interface IOrderService {
//    List<Order> findAllById(int id);

//    Order findByIdUser(int idUser);

    Order findByEmail(String email);
}
