package com.example.demo.model;

import javax.persistence.*;

@Entity(name = "news")
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(columnDefinition = "LONGTEXT")
    private String data; // 反正也不对数据有啥操作，直接拿String（在数据库是longtext）存
    private String modifiedTime;

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
}
