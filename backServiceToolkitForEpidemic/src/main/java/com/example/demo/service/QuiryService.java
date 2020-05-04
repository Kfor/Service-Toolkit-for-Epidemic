package com.example.demo.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@Service
public class QuiryService {
    private final String HOSPITAL = "http://api.map.baidu.com/place/v2/search?query=医院";
    private final String MEDICINE = "http://api.map.baidu.com/place/v2/search?query=药店";
    private final String akkey = "M0998imE0sDc6RvHDIk8UlA8195rw6u1";

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

    public String IsMaskTure(String no){
        String res = "{\"status\":";
        String temp = "";
        if(Math.random() % 2 == 0){
            temp += "ture";
        }
        else {
            temp += "false";
        }
        return res + temp + "}";

    }

}
