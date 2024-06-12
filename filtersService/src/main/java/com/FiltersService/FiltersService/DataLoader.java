package com.FiltersService.FiltersService;

import com.FiltersService.FiltersService.model.Criterion;
import com.FiltersService.FiltersService.model.Filter;
import com.FiltersService.FiltersService.repository.FilterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private FilterRepository filterRepository;

    @Override
    public void run(String... args) throws Exception {
        createAndSaveFilter(
                1L, "Test1", "option3",
                Arrays.asList(
                        new Criterion(1L, "Amount", "equals", "1"),
                        new Criterion(2L, "Title", "startsWith", "test"),
                        new Criterion(3L, "Date", "on", "2024-06-12")
                )
        );

        createAndSaveFilter(
                2L, "Test2", "option1",
                Arrays.asList(
                        new Criterion(4L, "Amount", "greaterThan", "10"),
                        new Criterion(5L, "Title", "contains", "test"),
                        new Criterion(6L, "Date", "before", "2024-07-01")
                )
        );

    }

    private void createAndSaveFilter(Long id, String name, String selection, List<Criterion> criteria) {
        Filter filter = new Filter();
        filter.setId(id);
        filter.setName(name);
        filter.setSelection(selection);
        filter.setCriteria(criteria);

        filterRepository.save(filter);
    }
}