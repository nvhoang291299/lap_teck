package com.example.lapteck_api.controller;

import com.example.lapteck_api.service.IOrderDetailService;
import com.example.lapteck_api.service.IOrderService;
import com.example.lapteck_api.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@CrossOrigin("*")
public class HistoryOrderController {
    @Autowired
    private IOrderService orderService;

    @Autowired
    private IOrderDetailService orderDetailService;

    @Autowired
    private IUserService userService;

    @GetMapping
    public ResponseEntity<?> historyOrder(@RequestParam(value = "email") String email){
        return new ResponseEntity<>()
    }
}
