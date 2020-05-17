package com.example.demo.dao;

import com.example.demo.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CrowdOrderingOrderDao extends JpaRepository<Order,Integer> {

}
