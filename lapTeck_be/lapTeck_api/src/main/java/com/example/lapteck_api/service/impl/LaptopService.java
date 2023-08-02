package com.example.lapteck_api.service.impl;

import com.example.lapteck_api.entities.IndexCart;
import com.example.lapteck_api.entities.Laptop;
import com.example.lapteck_api.entities.OrderDetail;
import com.example.lapteck_api.repository.LaptopRepository;
import com.example.lapteck_api.service.ILaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LaptopService implements ILaptopService {
    @Autowired
    private LaptopRepository laptopRepository;

    @Override
    public Page<Laptop> getAll(Pageable pageable) {
        return laptopRepository.findAll(pageable);
    }

    @Override
    public Laptop findByOrderDetail(OrderDetail element) {
        return laptopRepository.findByOrderDetails(element);
    }

    @Override
    public Laptop findByIndexCart(IndexCart indexCart) {
        return laptopRepository.findByIndexCarts(indexCart);
    }

    @Override
    public Laptop findById(int idLaptop) {
        return laptopRepository.findById(idLaptop).get();
    }
}
