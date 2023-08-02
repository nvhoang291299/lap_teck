package com.example.lapteck_api.service.impl;

import com.example.lapteck_api.repository.ManufacturerRepository;
import com.example.lapteck_api.service.IManufacturerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ManufacturerService implements IManufacturerService {
    @Autowired
    private ManufacturerRepository manufacturerRepository;
}

