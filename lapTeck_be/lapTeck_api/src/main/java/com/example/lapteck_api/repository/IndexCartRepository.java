package com.example.lapteck_api.repository;

import com.example.lapteck_api.entities.Cart;
import com.example.lapteck_api.entities.IndexCart;
import com.example.lapteck_api.entities.Laptop;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public interface IndexCartRepository extends JpaRepository<IndexCart, Integer> {
    List<IndexCart> findAllByCart(Cart cart);

    IndexCart findByCart(Cart cart);

    IndexCart findByCartAndLaptop(Cart cart, Laptop laptop);
}
