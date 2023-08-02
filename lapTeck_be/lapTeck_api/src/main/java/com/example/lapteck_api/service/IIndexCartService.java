package com.example.lapteck_api.service;

import com.example.lapteck_api.entities.Cart;
import com.example.lapteck_api.entities.IndexCart;
import com.example.lapteck_api.entities.Laptop;

import java.util.List;

public interface IIndexCartService {
    List<IndexCart> findAllByCart(Cart cart);

    IndexCart findByCart(Cart cart);

    void save(IndexCart indexCart);

    IndexCart findByCartAndLaptop(Cart cart, Laptop laptop);

    void deleteLaptopInCart(int idDel);
}
