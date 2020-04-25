package com.example.demo.controller;

import com.example.demo.dao.PersonRepository;
import com.example.demo.entity.person;
import com.example.demo.search.BingNewsSearch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PersonController {
    @Autowired
    PersonRepository personRepository;

    @GetMapping(value = "/person")
    private List<person> personList() {
        return personRepository.findAll();
    }

    @GetMapping(value = "/getNews")
    private String newsList() throws Exception {

        return BingNewsSearch.prettify(BingNewsSearch.SearchNews("COVID19").jsonResponse);
    }

}
