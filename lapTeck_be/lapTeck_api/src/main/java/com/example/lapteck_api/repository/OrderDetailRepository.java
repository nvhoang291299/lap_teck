package com.example.lapteck_api.repository;

import com.example.lapteck_api.entities.Order;
import com.example.lapteck_api.entities.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Integer> {

    List<OrderDetail> findAllByOrder(Order orders);


//    List<OrderDetail> findByIdOrder(int id);
}
