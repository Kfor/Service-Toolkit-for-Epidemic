package com.example.demo.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@Service
public class QuiryService {
    private final String HOSPITAL = "http://api.map.baidu.com/place/v2/search?query=医院"
//            + URLEncoder.encode("医院", "UTF-8")
            ;
    private final String akkey = "M0998imE0sDc6RvHDIk8UlA8195rw6u1";

    public QuiryService() throws UnsupportedEncodingException {
    }

    public String getHospitalPosition(String area) throws Exception {
        String url = HOSPITAL + "&region=" + area +
//                + URLEncoder.encode(area, "UTF-8") +
                "&output=json&ak=" + akkey;

        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        System.out.println(url);
        System.out.println(result);

        return result;
    }

}
