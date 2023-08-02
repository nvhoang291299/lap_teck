package com.example.lapteck_api.repository;

import com.example.lapteck_api.entities.IndexCart;
import com.example.lapteck_api.entities.Laptop;
import com.example.lapteck_api.entities.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LaptopRepository extends JpaRepository<Laptop, Integer> {
    Laptop findByOrderDetails(OrderDetail element);

    Laptop findByIndexCarts(IndexCart indexCart);
}
