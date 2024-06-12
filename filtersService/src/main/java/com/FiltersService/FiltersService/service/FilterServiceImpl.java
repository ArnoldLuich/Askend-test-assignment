package com.FiltersService.FiltersService.service;

import com.FiltersService.FiltersService.model.Filter;
import com.FiltersService.FiltersService.repository.FilterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilterServiceImpl implements FilterService {

    @Autowired
    private FilterRepository filterRepository;

    @Override
    public List<Filter> getAllFilters() {
        return filterRepository.findAll();
    }

    @Override
    public Filter createFilter(Filter filter) {
        return filterRepository.save(filter);
    }

}
