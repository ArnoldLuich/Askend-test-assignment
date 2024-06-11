package com.FiltersService.FiltersService.controller;

import com.FiltersService.FiltersService.model.Filter;
import com.FiltersService.FiltersService.service.FilterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/filters")
public class FilterController {

    @Autowired
    private FilterService filterService;

    @GetMapping
    public List<Filter> getAllFilters() {
        return filterService.getAllFilters();
    }

    @PostMapping
    public Filter createFilter(@RequestBody Filter filter) {
        return filterService.createFilter(filter);
    }
}