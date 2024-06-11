package com.FiltersService.FiltersService.service;

import com.FiltersService.FiltersService.model.Criterion;
import com.FiltersService.FiltersService.model.Filter;
import com.FiltersService.FiltersService.repository.FilterRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class FilterServiceImplTest {

    @Mock
    private FilterRepository filterRepository;

    @InjectMocks
    private FilterServiceImpl filterService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateFilter() {
        List<Criterion> criterions = new ArrayList<>();
        Criterion criterion = new Criterion();
        criterion.setId(3L);
        criterion.setType("Title");
        criterion.setCondition("contains");
        criterion.setValue("gg");
        criterions.add(criterion);

        Filter filter = new Filter();
        filter.setName("New Filter");
        filter.setCriteria(criterions);
        filter.setSelection("option1");

        when(filterRepository.save(filter)).thenReturn(filter);

        Filter result = filterService.createFilter(filter);

        assertEquals("New Filter", result.getName());
        assertEquals("[Criterion(id=3, type=Title, condition=contains, value=gg)]", result.getCriteria().toString());
        assertEquals("option1", result.getSelection());
    }

    @Test
    void testGetAllFilters() {
        List<Filter> filters = new ArrayList<>();
        List<Criterion> criterions = new ArrayList<>();

        Criterion criterion = new Criterion();
        criterion.setId(1L);
        criterion.setType("Amount");
        criterion.setCondition("greaterThan");
        criterion.setValue("1");
        criterions.add(criterion);

        Filter filter = new Filter();
        filter.setId(1L);
        filter.setName("Test Filter");
        filter.setCriteria(criterions);
        filter.setSelection("option2");
        filters.add(filter);

        when(filterRepository.findAll()).thenReturn(filters);

        List<Filter> result = filterService.getAllFilters();

        assertEquals(1, result.size());
        assertEquals("Test Filter", result.get(0).getName());
        assertEquals("[Criterion(id=1, type=Amount, condition=greaterThan, value=1)]", result.get(0).getCriteria().toString());
        assertEquals("option2", result.get(0).getSelection());
    }
}
