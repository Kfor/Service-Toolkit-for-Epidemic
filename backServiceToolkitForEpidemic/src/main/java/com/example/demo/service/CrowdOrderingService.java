package com.example.demo.service;

import com.example.demo.dao.CrowdOrderingItemDao;
import com.example.demo.dao.CrowdOrderingItemOrderDao;
import com.example.demo.dao.CrowdOrderingOrderDao;
import com.example.demo.dao.CrowdOrderingUserDao;
import com.example.demo.model.Item;
import com.example.demo.model.ItemOrder;
import com.example.demo.model.Order;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class CrowdOrderingService {
    final CrowdOrderingItemDao crowdOrderingItemDao;
    final CrowdOrderingOrderDao crowdOrderingOrderDao;
    final CrowdOrderingUserDao crowdOrderingUserDao;
    final CrowdOrderingItemOrderDao crowdOrderingItemOrderDao;

    public CrowdOrderingService(CrowdOrderingItemDao crowdOrderingItemDao, CrowdOrderingOrderDao crowdOrderingOrderDao,
                                CrowdOrderingUserDao crowdOrderingUserDao, CrowdOrderingItemOrderDao crowdOrderingItemOrderDao) {
        this.crowdOrderingItemDao = crowdOrderingItemDao;
        this.crowdOrderingOrderDao = crowdOrderingOrderDao;
        this.crowdOrderingUserDao = crowdOrderingUserDao;
        this.crowdOrderingItemOrderDao = crowdOrderingItemOrderDao;
    }

    /**
     * @return {
     *      "itemList": [
     *          {
     *              "name": "吃的",
     *              "items": [
     *                  {
     *                      "name": "小火锅",
     *                      "iconUrl": "http://img.kiwifruits.cn/classify/1/1.jpg",
     *                  }
     *              ]
     *          }
     *      ]
     * }
     */
    public String getItemList() {  // 对于doc所描述的json进行格式化处理
        List<String> classificationList = crowdOrderingItemDao.findClassificationList();
        JsonArray resList = new JsonArray();

        for (String oneClassification : classificationList) {
            JsonObject oneRes = new JsonObject();
            oneRes.addProperty("name", oneClassification);

            List<Item> resItemList = crowdOrderingItemDao.findAllByClassification(oneClassification);
            JsonArray oneClassificationItemList = new JsonArray();

            for (Item oneItem : resItemList
            ) {
                JsonObject oneItemObject = new JsonObject();
                oneItemObject.addProperty("name", oneItem.getItemName());
                oneItemObject.addProperty("iconUrl", oneItem.getIconUrl());
                oneClassificationItemList.add(oneItemObject);
            }
            oneRes.add("items", oneClassificationItemList);

            resList.add(oneRes);
        }
        JsonObject resJsonObject = new JsonObject();
        resJsonObject.add("itemList", resList);
        return resJsonObject.toString();
    }

    public String confirmOrder(String itemList, String targetLocation, String userId) { // 总体分两步，一步是创建一个新的order实体，一步是创建这个order实体关联的item实体
        Order newOrder = new Order();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); // mysql的date存储格式
        newOrder.setStartTime(dateFormat.format(new Date()));
        newOrder.setState("processing");
        newOrder.setTargetLocation(targetLocation);
        newOrder.setUserId(userId);
        crowdOrderingOrderDao.save(newOrder);

        Gson gson = new Gson();  // 对于每一个item都新建itemOrder实体
        for (JsonElement oneItem : gson.fromJson(itemList, JsonArray.class)
        ) {
            Integer itemId = oneItem.getAsJsonObject().get("itemId").getAsInt();
            Integer quantity = oneItem.getAsJsonObject().get("quantity").getAsInt();
            ItemOrder newItemOrder = new ItemOrder();
            newItemOrder.setItemId(itemId);
            newItemOrder.setQuantity(quantity);
            newItemOrder.setOrderId(newOrder.getOrderId());
            crowdOrderingItemOrderDao.save(newItemOrder);
        }


        return "{\"code\":200,\"status\":\"success\"}";
    }
}
