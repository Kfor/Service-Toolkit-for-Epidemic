package com.example.demo.dao;

import com.example.demo.entity.person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<person, Long> {

}
