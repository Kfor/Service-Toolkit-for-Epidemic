package com.example.demo.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;
import org.apache.http.HttpResponse;
import org.apache.http.util.EntityUtils;
import com.example.demo.utils.HttpUtils;
@Service
public class QuiryService {
    private final String HOSPITAL = "http://api.map.baidu.com/place/v2/search?query=医院";
    private final String MEDICINE = "http://api.map.baidu.com/place/v2/search?query=药店";
    private final String akkey = "M0998imE0sDc6RvHDIk8UlA8195rw6u1";
    private final String MASK_HOST = "http://indevice.market.alicloudapi.com";
    private final String MASK_PATH = "/kgraph/domestic_medical_device/search_register_id/v1";
    private final String appcode = "0b177b0df5c843218058d715c784c425";

    public String getHospitalPosition(String area) {
        String url = HOSPITAL + "&region=" + area + "&output=json&ak=" + akkey;
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        return result;
    }

    public String getMedicinePosition(String area){
        String url = MEDICINE + "&region=" + area + "&output=json&ak=" + akkey;
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        return result;
    }

    public String quiryMask(String number){
        Map<String, String> headers = new HashMap<String, String>();
        headers.put("Authorization", "APPCODE " + appcode);
        Map<String, String> querys = new HashMap<String, String>();

        //参数配置
        //搜索字符串，如：沪械注准20172630093
        System.out.println(number);
        querys.put("STRING", number);
        //搜索结果页码序列，如：1
        querys.put("PAGE_NUM", "1");


        try {
            HttpResponse response = HttpUtils.doGet(MASK_HOST, MASK_PATH, "GET", headers, querys);
            System.out.println(response.toString());
            //获取response的body
            String body = EntityUtils.toString(response.getEntity());
            System.out.println(body);
            return  body;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}

