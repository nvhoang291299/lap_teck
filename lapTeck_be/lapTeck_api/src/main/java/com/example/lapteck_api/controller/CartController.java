package com.example.lapteck_api.controller;

import com.example.lapteck_api.dto.CartDTO;
import com.example.lapteck_api.entities.*;
import com.example.lapteck_api.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@CrossOrigin("*")
public class CartController {

    @Autowired
    private IOrderDetailService orderDetailService;

    @Autowired
    private ICartService cartService;

    @Autowired
    private ILaptopService laptopService;

    @Autowired
    private IUserService userService;

    @Autowired
    private IIndexCartService indexCartService;

    @GetMapping("/cart")
    public ResponseEntity<?> showCart(@RequestParam(name = "email") String email) {
        List<CartDTO> cartDTOS = cartService.listCard(email);

        return new ResponseEntity<>(cartDTOS, HttpStatus.OK);
    }

    @PostMapping("/add-cart")
    public ResponseEntity<?> addCart(@RequestParam(name = "idLaptop") int idLaptop,
                                     @RequestParam(name = "email") String email){
        Users user = userService.findByEmail(email);
        Cart cart = cartService.findByUser(user);
        Laptop laptop = laptopService.findById(idLaptop);
        int count = 1;

        IndexCart indexCart = indexCartService.findByCartAndLaptop(cart, laptop);
        if (indexCart != null) {
            count = indexCart.getQuantity() + 1;
            indexCart.setQuantity(count);
            indexCart.setTotal(count * laptop.getPrice());
        } else {
            indexCart = new IndexCart();
            indexCart.setCart(cart);
            indexCart.setLaptop(laptop);
            indexCart.setQuantity(count);
            indexCart.setTotal(count * laptop.getPrice());
        }

        indexCartService.save(indexCart);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/delete-cart")
    public ResponseEntity<?> deleteLaptopInCart(@RequestParam(name = "idDel") int idDel) {
        indexCartService.deleteLaptopInCart(idDel);
        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @PatchMapping("/update-cart")
//    public ResponseEntity<?> updateCart();
}
