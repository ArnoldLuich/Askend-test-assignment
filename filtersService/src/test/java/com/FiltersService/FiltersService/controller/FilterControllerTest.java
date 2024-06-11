package com.FiltersService.FiltersService.controller;

import com.FiltersService.FiltersService.model.Filter;
import com.FiltersService.FiltersService.service.FilterService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public class FilterControllerTest {
    @Mock
    private FilterService filterService;

    @InjectMocks
    private FilterController filterController;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(filterController).build();
    }

    @Test
    void testGetAllFilters() throws Exception {
        List<Filter> filters = new ArrayList<>();

        Filter filter = new Filter();
        filter.setName("New Filter Test");
        filter.setSelection("option1");
        ;
        filters.add(filter);

        when(filterService.getAllFilters()).thenReturn(filters);

        mockMvc.perform(get("/api/filters")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[0].name").value("New Filter Test"))
                .andExpect(jsonPath("$[0].selection").value("option1"));
    }
}
