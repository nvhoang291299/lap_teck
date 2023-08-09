package com.example.lapteck_api.service;

import com.example.lapteck_api.entities.IndexCart;
import com.example.lapteck_api.entities.Laptop;
import com.example.lapteck_api.entities.OrderDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ILaptopService {
    Page<Laptop> getAll(Pageable pageable);

    Laptop findByOrderDetail(OrderDetail element);

    Laptop findByIndexCart(IndexCart indexCart);

    Laptop findById(int idLaptop);

    List<Laptop> topThreeLaptop();

    List<Laptop> findByNameLaptop(String nameLaptop);
}
