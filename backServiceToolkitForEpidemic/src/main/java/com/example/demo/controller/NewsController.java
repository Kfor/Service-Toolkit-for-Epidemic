package com.example.demo.controller;

import com.example.demo.search.BingNewsCondition;
import com.example.demo.search.BingNewsSearch;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class NewsController {

    /**
     * @throws Exception
     * @func: Used to support to show news page
     * @return: whole json data containing some useless header info, only the "value:[]" part is useful
     * items in "value:[]" contains url, which can be used to see details.
     */
    @GetMapping(value = "/getNews")
    private String returnNews() throws Exception {
        Boolean isFromDB = false;

        /*call database interface, check if satisfy some specific condition
         * if not, return data from Bing API temporarily
         * else return data from db*/
        BingNewsCondition bingNewsCondition = new BingNewsCondition();

        if (!isFromDB) {
            return BingNewsSearch.prettify(BingNewsSearch.SearchNews(bingNewsCondition).jsonResponse);
        } else {
            /*return data from database*/
            return null;
        }

    }

    /**
     * @param requestMap: For specified param, the base url still is "http://localhost:8080/getNews", the params
     *                    are described in requestbody, raw data with json format.
     *                    "query": is target, if has more than one keyword, please use '+' to connect them
     *                    "offset": not important
     *                    "count": the number of info that each query returns
     *                    "mkt": the source of news, like "en-us","zh-CN", and so on
     * @throws Exception
     * @func: Used to support keyword search
     * @return: whole json data containing some useless header info, only the "value:[]" part is useful
     */
    @PostMapping(value = "/getNews")
    private String returnKeyNews(@RequestBody Map<String, Object> requestMap) throws Exception {
        Boolean isFromDB = false;

        /*call database interface, check if satisfy some specific condition
         * if not, return data from Bing API temporarily
         * else return data from db*/
        BingNewsCondition bingNewsCondition = new BingNewsCondition();
        bingNewsCondition.setQuery(requestMap.get("query").toString());

        if (requestMap.get("count") != null) {
            bingNewsCondition.setCount(requestMap.get("count").toString());
        }
        if (requestMap.get("offset") != null) {
            bingNewsCondition.setOffset(requestMap.get("offset").toString());
        }
        if (requestMap.get("mkt") != null) {
            bingNewsCondition.setMkt(requestMap.get("mkt").toString());
        }
        System.out.println("current count: " + bingNewsCondition.getQuery());

        if (!isFromDB) {
            return BingNewsSearch.prettify(BingNewsSearch.SearchNews(bingNewsCondition).jsonResponse);
        } else {
            /*return data from database*/
            return null;
        }

    }
}
