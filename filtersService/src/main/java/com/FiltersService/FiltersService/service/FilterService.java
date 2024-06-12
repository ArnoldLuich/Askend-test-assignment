package com.FiltersService.FiltersService.service;


import com.FiltersService.FiltersService.model.Filter;

import java.util.List;


public interface FilterService {
    List<Filter> getAllFilters();

    Filter createFilter(Filter filter);

}
