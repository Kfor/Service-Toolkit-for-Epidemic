package com.example.demo.controller;

import com.example.demo.service.CrowdOrderingService;
import com.example.demo.utils.MyUtils;
import com.google.gson.JsonArray;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class CrowdOrderingController {
    final CrowdOrderingService crowdOrderingService;
    MyUtils myUtils = new MyUtils();

    public CrowdOrderingController(CrowdOrderingService crowdOrderingService) {
        this.crowdOrderingService = crowdOrderingService;
    }

    @GetMapping(value = "/getItemList")  // 获得拼团主页面的物品栏
    public String getItemList() {
        return myUtils.prettify(crowdOrderingService.getItemList());
    }

    @PostMapping(value = "/confirmOrder")  // 发起一个订单
    public String confirmOrder(@RequestParam("itemList") String itemList, @Param("targetLocation") String targetLocation, @Param("userId") String userId) {
        return myUtils.prettify(crowdOrderingService.confirmOrder(itemList, targetLocation, userId));
    }

}
