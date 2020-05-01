package com.example.demo.service;

import com.example.demo.model.MapPage.EpidemicMapModel;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class EpidemicMapService {
    private EpidemicMapModel epidemicMapModel;
    private final String globalMapDataEndPoint = "http://api.tianapi.com/txapi/ncovabroad/index?key={1}"; // 括号1指的是传入的第一个参数
    private final String inlandMapDataEndPoint = "http://api.tianapi.com/txapi/ncovcity/index?key={1}";
    private final String inlandOutlineDataEndPoint = "http://api.tianapi.com/txapi/ncov/index?key={1}";
    private final String globalOutlineDataEndPoint = "http://api.tianapi.com/txapi/ncov/index?key={1}";// 事实上和inland调用的是同一个接口，使用其中不同的数据
    private final String nearbyDataEndPoint = "http://api.tianapi.com/txapi/ncovnearby/index?key={1}";

    private final String tianAPIKEY = "68b512d1b0023c2a4db0818a4854700c";


    public String getInlandMapData() { // 暂未考虑从db获取，下同
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(inlandMapDataEndPoint, String.class, tianAPIKEY);
        return response;
    }

    public String getGlobalMapData() {
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(globalMapDataEndPoint, String.class, tianAPIKEY);
        return response;
    }

    public String getInlandOutlineData() {
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(inlandOutlineDataEndPoint, String.class, tianAPIKEY);
        Gson gson = new Gson();
        JsonObject temp = gson.fromJson(response, JsonObject.class)
                .get("newslist").getAsJsonArray().get(0).getAsJsonObject().get("desc").getAsJsonObject(); // 对json的操作获取到inland data

        Map<String, String> map = new HashMap<>(); // 筛选出有用的数据
        String[] mapList = {"currentConfirmedCount", "confirmedCount", "suspectedCount", "curedCount", "deadCount", "seriousCount",
                "suspectedIncr", "currentConfirmedIncr", "confirmedIncr", "curedIncr", "deadIncr", "seriousIncr"};
        for (String item : mapList
        ) {
            map.put(item, temp.get(item).toString());
        }

        return gson.toJson(map);
    }

    public String getGlobalOutlineData() {
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(globalOutlineDataEndPoint, String.class, tianAPIKEY);
        Gson gson = new Gson();
        JsonObject temp = gson.fromJson(response, JsonObject.class)
                .get("newslist").getAsJsonArray().get(0).getAsJsonObject().get("desc")
                .getAsJsonObject().get("globalStatistics").getAsJsonObject();
        return temp.toString();
    }

    public String getCommunityData(String province, String city, String district) {
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(nearbyDataEndPoint + "&province={2}&city={3}&district={4}",
                String.class, tianAPIKEY, province, city, district);
        return response;
    }

}
