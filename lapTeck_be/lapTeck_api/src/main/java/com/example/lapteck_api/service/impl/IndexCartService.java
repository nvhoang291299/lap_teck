package com.example.lapteck_api.service.impl;

import com.example.lapteck_api.entities.Cart;
import com.example.lapteck_api.entities.IndexCart;
import com.example.lapteck_api.entities.Laptop;
import com.example.lapteck_api.repository.IndexCartRepository;
import com.example.lapteck_api.service.IIndexCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IndexCartService implements IIndexCartService {
    @Autowired
    private IndexCartRepository indexCartRepository;

    @Override
    public List<IndexCart> findAllByCart(Cart cart) {
        return indexCartRepository.findAllByCart(cart);
    }

    @Override
    public void save(IndexCart indexCart) {
        indexCartRepository.save(indexCart);
    }

    @Override
    public IndexCart findByCartAndLaptop(Cart cart, Laptop laptop) {
        return indexCartRepository.findByCartAndLaptop(cart, laptop);
    }

    @Override
    public void deleteLaptopInCart(int idDel) {
        indexCartRepository.deleteById(idDel);
    }

    @Override
    public IndexCart findByCart(Cart cart) {
        return indexCartRepository.findByCart(cart);
    }
}
