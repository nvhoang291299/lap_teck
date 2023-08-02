package com.example.lapteck_api.repository;

import com.example.lapteck_api.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {


//    Order findByIdUser(int idUser);
    @Query(value = "select orders.* from orders join users on users.id_user = orders.id_user where users.email = ?1", nativeQuery = true)
    Order findByEmail(String email);
}
