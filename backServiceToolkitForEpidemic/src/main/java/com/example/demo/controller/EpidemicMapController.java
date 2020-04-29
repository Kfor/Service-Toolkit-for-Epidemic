package com.example.demo.controller;

import com.example.demo.service.EpidemicMapService;
import com.example.demo.utils.MyUtils;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EpidemicMapController {
    EpidemicMapService epidemicMapService = new EpidemicMapService();
    MyUtils myUtils = new MyUtils();

    @GetMapping(value = "/getMapData")
    public String getMapData(@Param("area") String area) {
        if (area.equals("global")) {
            return myUtils.prettify(epidemicMapService.getGlobalMapData());
        } else if (area.equals("inland")) {
            return myUtils.prettify(epidemicMapService.getInlandMapData());
        } else {
            return "param error";
        }
    }

    @GetMapping(value = "/getOutlineData")
    public String getOutlineData(@Param("area") String area) {
        if (area.equals("global")) {
            return myUtils.prettify(epidemicMapService.getGlobalOutlineData());
        } else if (area.equals("inland")) {
            return myUtils.prettify(epidemicMapService.getInlandOutlineData());
        } else {
            return "param error";
        }
    }

    @GetMapping(value = "/getCommunityData")
    public String getCommunityData(@Param("province") String province,
                                   @Param("city") String city,
                                   @Param("district") String district) {
        return myUtils.prettify(epidemicMapService.getCommunityData(province, city, district));
    }
}