package com.example.lapteck_api.service.impl;

import com.example.lapteck_api.entities.Order;
import com.example.lapteck_api.entities.OrderDetail;
import com.example.lapteck_api.repository.OrderDetailRepository;
import com.example.lapteck_api.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    private OrderDetailRepository orderDetailRepository;

    @Override
    public List<OrderDetail> findByOrder(Order orders) {
        return orderDetailRepository.findAllByOrder(orders);
    }

    @Override
    public void deleteLaptopInCart(int idDel) {
        orderDetailRepository.deleteById(idDel);
    }

//    @Override
//    public List<OrderDetail> findByIdOrder(int id) {
//        return orderDetailRepository.findByIdOrder(id);
//    }
}
