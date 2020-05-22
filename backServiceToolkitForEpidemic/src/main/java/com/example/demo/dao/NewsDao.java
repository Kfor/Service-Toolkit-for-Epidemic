package com.example.demo.dao;

import com.example.demo.model.EpidemicMap;
import com.example.demo.model.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface NewsDao extends JpaRepository<News,Integer> {
    @Query(value = "select * from news where modified_time=(select max(modified_time) from news) limit 1", nativeQuery = true)
    News findLatest();
}
