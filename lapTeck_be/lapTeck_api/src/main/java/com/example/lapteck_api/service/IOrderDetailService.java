package com.example.lapteck_api.service;

import com.example.lapteck_api.entities.Order;
import com.example.lapteck_api.entities.OrderDetail;

import java.util.List;

public interface IOrderDetailService {
    List<OrderDetail> findByOrder(Order orders);

    void deleteLaptopInCart(int idDel);
}
