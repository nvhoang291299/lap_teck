package com.example.lapteck_api.service.impl;

import com.example.lapteck_api.dto.CartDTO;
import com.example.lapteck_api.entities.*;
import com.example.lapteck_api.repository.CartRepository;
import com.example.lapteck_api.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartService implements ICartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private IUserService userService;

    @Autowired
    private ILaptopService laptopService;

    @Autowired
    private IIndexCartService indexCartService;


    @Override
    public List<CartDTO> listCard(String email) {
        List<CartDTO> cartDTOS = new ArrayList<>();
        Users user = userService.findByEmail(email);
        Cart cart = cartRepository.findByUser(user);

        List<IndexCart> indexCarts = indexCartService.findAllByCart(cart);
        for (IndexCart indexCart: indexCarts) {
            Laptop laptop = laptopService.findByIndexCart(indexCart);
            CartDTO cartDTO = new CartDTO(indexCart.getId(), laptop.getImage(), laptop.getNameProduct(), indexCart.getQuantity(), indexCart.getTotal());
            cartDTOS.add(cartDTO);
        }
        return cartDTOS;
    }

    @Override
    public Cart findByUser(Users user) {
        return cartRepository.findByUser(user);
    }
}
