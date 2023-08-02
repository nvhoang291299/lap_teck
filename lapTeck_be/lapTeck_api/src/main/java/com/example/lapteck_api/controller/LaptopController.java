package com.example.lapteck_api.controller;

import com.example.lapteck_api.entities.Laptop;
import com.example.lapteck_api.service.impl.LaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class LaptopController {

    @Autowired
    private LaptopService laptopService;
    @GetMapping("/laptop")
    public ResponseEntity<?> laptop(@RequestParam(value = "page", defaultValue = "0") int page) {
        Pageable pageable = PageRequest.of(page, 10);
        Page<Laptop> laptops = laptopService.getAll(pageable);
        return new ResponseEntity<>(laptops, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<?> detail(@PathVariable int id){
        Laptop laptop = laptopService.findById(id);
        return new ResponseEntity<>(laptop, HttpStatus.OK);
    }
}
