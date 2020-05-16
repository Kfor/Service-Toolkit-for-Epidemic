package com.example.demo.service;

import com.example.demo.dao.EpidemicMapDao;
import com.example.demo.model.EpidemicMap;
import com.example.demo.utils.TimeHoursAgo;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class EpidemicMapService {
    private final String globalMapDataEndPoint = "http://api.tianapi.com/txapi/ncovabroad/index?key={1}"; // 括号1指的是传入的第一个参数
    private final String inlandMapDataEndPoint = "http://api.tianapi.com/txapi/ncovcity/index?key={1}";
    private final String inlandOutlineDataEndPoint = "http://api.tianapi.com/txapi/ncov/index?key={1}";
    private final String globalOutlineDataEndPoint = "http://api.tianapi.com/txapi/ncov/index?key={1}";// 事实上和inland调用的是同一个接口，使用其中不同的数据
    private final String nearbyDataEndPoint = "http://api.tianapi.com/txapi/ncovnearby/index?key={1}";

    private final String tianAPIKEY = "68b512d1b0023c2a4db0818a4854700c";
    private final int cacheTime = 5;

    final
    EpidemicMapDao epidemicMapDao;

    public EpidemicMapService(EpidemicMapDao epidemicMapDao) {
        this.epidemicMapDao = epidemicMapDao;
    }


    private String getResultString(String type, String url) {
        EpidemicMap latest = epidemicMapDao.findLatestByType(type);
        String res = "";
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        try {
            if (latest != null && dateFormat.parse(latest.getModifiedTime()).getTime() > TimeHoursAgo.getTimeHoursAgo(cacheTime).getTime()) {  // 如果最新数据距离当前时间短于5小时
                System.out.println("get " + type + " data from database");
                res = latest.getData();
            } else {
                res = getFromApiAndSave(url, type);
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return res;
    }

    public String getFromApiAndSave(String url, String type) {
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(url, String.class, tianAPIKEY);

        EpidemicMap tempSave = new EpidemicMap();
        tempSave.setData(response);
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); // mysql的date存储格式
        tempSave.setModifiedTime(dateFormat.format(new Date()));
        tempSave.setType(type);
        epidemicMapDao.save(tempSave);
        System.out.println("get " + type + " data from api");

        return response;

    }


    public String getInlandMapData() { // 暂未考虑从db获取，下同
        String type = "InlandMap";
        return getResultString(type, inlandMapDataEndPoint);
    }

    public String getGlobalMapData() {
        String type = "GlobalMap";
        return getResultString(type, globalMapDataEndPoint);
    }

    public String getInlandOutlineData() {
        String type = "InlandOutline";
        String response = getResultString(type, inlandOutlineDataEndPoint);

        Gson gson = new Gson();
        JsonObject temp = gson.fromJson(response, JsonObject.class)
                .get("newslist").getAsJsonArray().get(0).getAsJsonObject().get("desc").getAsJsonObject(); // 对json的操作获取到inland data

        Map<String, String> map = new HashMap<>(); // 筛选出有用的数据
        String[] mapList = {"currentConfirmedCount", "confirmedCount", "suspectedCount", "curedCount", "deadCount", "seriousCount",
                "suspectedIncr", "currentConfirmedIncr", "confirmedIncr", "curedIncr", "deadIncr", "seriousIncr"
        };

        for (String item : mapList
        ) {
            if (temp != null && temp.get(item) != null) map.put(item, temp.get(item).toString());
        }

        return gson.toJson(map);
    }

    public String getGlobalOutlineData() {
        String type = "GlobalOutline";
        String response = getResultString(type, globalOutlineDataEndPoint);

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
