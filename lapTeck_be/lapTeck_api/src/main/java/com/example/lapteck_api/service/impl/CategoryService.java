package com.example.lapteck_api.service.impl;

import com.example.lapteck_api.repository.CategoryRepository;
import com.example.lapteck_api.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
}
