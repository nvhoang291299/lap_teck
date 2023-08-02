package com.example.lapteck_api.service.impl;

import com.example.lapteck_api.entities.Order;
import com.example.lapteck_api.entities.Users;
import com.example.lapteck_api.repository.OrderRepository;
import com.example.lapteck_api.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private OrderRepository orderRepository;

//    @Override
//    public List<Order> findAllById(int id) {
//        return orderRepository.findAllByIdUser(id);
//    }


//    @Override
//    public Order findByIdUser(int idUser) {
//        return orderRepository.findByIdUser(idUser);
//    }

    @Override
    public Order findByEmail(String email) {
        return orderRepository.findByEmail(email);
    }
}
