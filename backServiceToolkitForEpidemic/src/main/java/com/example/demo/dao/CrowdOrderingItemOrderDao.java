package com.example.demo.dao;

import com.example.demo.model.ItemOrder;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CrowdOrderingItemOrderDao extends JpaRepository<ItemOrder, Integer> {

}
