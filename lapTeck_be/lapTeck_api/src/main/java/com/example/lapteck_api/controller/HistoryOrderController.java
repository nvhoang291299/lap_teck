package com.example.lapteck_api.controller;

import com.example.lapteck_api.dto.HistoryOrder;
import com.example.lapteck_api.entities.Laptop;
import com.example.lapteck_api.entities.Order;
import com.example.lapteck_api.entities.OrderDetail;
import com.example.lapteck_api.entities.Users;
import com.example.lapteck_api.service.ILaptopService;
import com.example.lapteck_api.service.IOrderDetailService;
import com.example.lapteck_api.service.IOrderService;
import com.example.lapteck_api.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
@CrossOrigin("*")
public class HistoryOrderController {
    @Autowired
    private IOrderService orderService;

    @Autowired
    private IOrderDetailService orderDetailService;

    @Autowired
    private IUserService userService;

    @Autowired
    private ILaptopService laptopService;

    @GetMapping("/history-order")
    public ResponseEntity<?> historyOrder(@RequestParam(name = "email") String email){
        List<HistoryOrder> historyOrders = new ArrayList<>();
        Users user = userService.findByEmail(email);
        Order order = orderService.findByUser(user);
        List<OrderDetail> orderDetails = orderDetailService.findByOrder(order);
        for (OrderDetail orderDetail: orderDetails) {
            Laptop laptop = laptopService.findByOrderDetail(orderDetail);
            HistoryOrder historyOrder = new HistoryOrder(laptop.getNameProduct(), laptop.getImage(),
                    orderDetail.getQuantityOrder(),orderDetail.getUnitPrice(), orderDetail.getOrder().getDateOrder(),
                    orderDetail.getOrder().getStatusOrder());
            historyOrders.add(historyOrder);
        }
        return new ResponseEntity<>(historyOrders, HttpStatus.OK);
    }
}
