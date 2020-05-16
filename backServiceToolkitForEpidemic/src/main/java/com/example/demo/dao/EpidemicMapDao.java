package com.example.demo.dao;

import com.example.demo.model.EpidemicMap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EpidemicMapDao extends JpaRepository<EpidemicMap, Integer> {
    @Query(value = "select * from epidemic_map where modified_time=(select max(modified_time) from epidemic_map where type=:type)", nativeQuery = true)
    EpidemicMap findLatestByType(@Param("type") String type);
}
