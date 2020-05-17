package com.example.demo.dao;

import com.example.demo.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CrowdOrderingItemDao extends JpaRepository<Item,Integer> {
    List<Item> findAllByClassification(String classification);
    @Query(value = "select distinct classification from item",nativeQuery = true)
    List<String> findClassificationList();
}
