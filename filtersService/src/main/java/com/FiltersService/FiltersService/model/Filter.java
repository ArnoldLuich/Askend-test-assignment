package com.FiltersService.FiltersService.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class Filter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String selection;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    // Join the criteria list to the filter entity using the filter_id column
    @JoinColumn(name = "filter_id")
    private List<Criterion> criteria;

}
