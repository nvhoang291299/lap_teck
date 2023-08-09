package com.example.lapteck_api.repository;

import com.example.lapteck_api.entities.IndexCart;
import com.example.lapteck_api.entities.Laptop;
import com.example.lapteck_api.entities.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LaptopRepository extends JpaRepository<Laptop, Integer> {
    Laptop findByOrderDetails(OrderDetail element);

    Laptop findByIndexCarts(IndexCart indexCart);

    @Query(value = "select * from Laptop ORDER BY price LIMIT 3", nativeQuery = true)
    List<Laptop> topThreeLaptop();

    @Query(value = "select * from Laptop WHERE name_laptop LIKE CONCAT('%',:nameLaptop, '%')", nativeQuery = true)
    List<Laptop> findByNameProduct(String nameLaptop);
}
