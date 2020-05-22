package com.example.demo.model;


import javax.persistence.*;
import java.util.Date;


@Entity(name = "epidemic_map")
public class EpidemicMap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(columnDefinition = "LONGTEXT")
    private String data; // 反正也不对数据有啥操作，直接拿String（在数据库是longtext）存
    private String modifiedTime;
    private String type;


    public void setData(String data) {
        this.data = data;
    }

    public String getData() {
        return data;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setModifiedTime(String modifiedTime) {
        this.modifiedTime = modifiedTime;
    }

    public String getModifiedTime() {
        return modifiedTime;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}