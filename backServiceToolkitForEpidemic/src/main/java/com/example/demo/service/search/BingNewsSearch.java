package com.example.demo.service.search;

import com.example.demo.dao.NewsDao;
import com.example.demo.model.News;
import com.example.demo.utils.TimeHoursAgo;
import org.springframework.stereotype.Service;

import javax.net.ssl.HttpsURLConnection;
import java.io.InputStream;
import java.net.URL;
import java.net.URLEncoder;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class BingNewsSearch {

    // Add your Bing Search V7 subscription key to your environment variables.
    static String subscriptionKey = "133ead972a994c17b64553f0259c16c3";

    // Add your Bing Search V7 endpoint to your environment variables.
    static String endpoint = "https://api.cognitive.microsoft.com/bing/v7.0/news/search";
    final Integer cacheTime = 5;

    final NewsDao newsDao;

    public BingNewsSearch(NewsDao newsDao) {
        this.newsDao = newsDao;
    }


    public String getFromApi(String option) throws Exception {
        URL url = new URL(endpoint + option);
        HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();
        connection.setRequestProperty("Ocp-Apim-Subscription-Key", subscriptionKey);

        // Receive JSON body
        InputStream stream = connection.getInputStream();
        Scanner scanner = new Scanner(stream, "utf-8");
        String response = scanner.useDelimiter("\\A").next();

        // Construct result object for return
        BingNewsResult results = new BingNewsResult(new HashMap<String, String>(), response);

        // Extract Bing-related HTTP headers
        Map<String, List<String>> headers = connection.getHeaderFields();
        for (String header : headers.keySet()) {
            if (header == null) continue;      // may have null key
            if (header.startsWith("BingAPIs-") || header.startsWith("X-MSEdge-")) {
                results.relevantHeaders.put(header, headers.get(header).get(0));
            }
        }
        scanner.close();
        stream.close();

        return results.jsonResponse;
    }

    public String SearchNews(BingNewsCondition searchQuery) throws Exception {
        // Construct URL of search request (endpoint + query string)
        String option = "";
        if (searchQuery.getQuery() != null) {
            option += "?q=" + URLEncoder.encode(searchQuery.getQuery(), "UTF-8");
        }
        if (searchQuery.getCount() != null) {
            option += "&count=" + URLEncoder.encode(searchQuery.getCount(), "UTF-8");
        }
        if (searchQuery.getOffset() != null) {
            option += "&offset=" + URLEncoder.encode(searchQuery.getOffset(), "UTF-8");
        }
        if (searchQuery.getMkt() != null) {
            option += "&mkt=" + URLEncoder.encode(searchQuery.getMkt(), "UTF-8");
        }

        if (Integer.parseInt(searchQuery.getCount()) >= 50) {
            News latest = newsDao.findLatest();
            String res = "";
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            try {
                if (latest != null && dateFormat.parse(latest.getModifiedTime()).getTime() > TimeHoursAgo.getTimeHoursAgo(cacheTime).getTime()) {  // 如果最新数据距离当前时间短于5小时
                    System.out.println("get news from database");
                    res = latest.getData();
                } else {
                    res = getFromApi(option);
                    News tempSave = new News();
                    tempSave.setData(res);
                    tempSave.setModifiedTime(dateFormat.format(new Date()));
                    newsDao.save(tempSave);
                }
            } catch (ParseException e) {
                e.printStackTrace();
            }
            return res;
        } else {
            System.out.println("get news from api");
            return getFromApi(option);
        }

//        searchQuery.print();
//        System.out.println(endpoint + option + "&safeSearch=Moderate");

    }
}