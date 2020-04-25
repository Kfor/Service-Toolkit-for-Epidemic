package com.example.demo.controller;

import com.example.demo.search.BingNewsSearch;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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

        if (!isFromDB) {
            return BingNewsSearch.prettify(BingNewsSearch.SearchNews("COVID19").jsonResponse);
        } else {
            /*return data from database*/
            return null;
        }

    }

    /**
     * @param keyword: comes from request, eg: http://localhost:8080/getKeyNews/Microsoft, which can get
     *                 news about Microsoft
     * @throws Exception
     * @func: Used to support keyword search
     * @return: whole json data containing some useless header info, only the "value:[]" part is useful
     */
    @GetMapping(value = "/getKeyNews/{keyword}")
    private String returnKeyNews(@PathVariable("keyword") String keyword) throws Exception {
        Boolean isFromDB = false;

        /*call database interface, check if satisfy some specific condition
         * if not, return data from Bing API temporarily
         * else return data from db*/

        if (!isFromDB) {
            return BingNewsSearch.prettify(BingNewsSearch.SearchNews(keyword).jsonResponse);
        } else {
            /*return data from database*/
            return null;
        }

    }
}
