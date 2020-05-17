package com.example.demo.dao;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CrowdOrderingUserDao extends JpaRepository<User,Integer>{

}
