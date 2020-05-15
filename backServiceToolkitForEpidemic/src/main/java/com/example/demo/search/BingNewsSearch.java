package com.example.demo.search;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import javax.net.ssl.HttpsURLConnection;
import java.io.InputStream;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class BingNewsSearch {

    // Add your Bing Search V7 subscription key to your environment variables.
    static String subscriptionKey = "4cc7889c690f4601b6202a5694a74173";

    // Add your Bing Search V7 endpoint to your environment variables.
    static String endpoint = "https://api.cognitive.microsoft.com/bing/v7.0/news/search";

    public static BingNewsResult SearchNews(BingNewsCondition searchQuery) throws Exception {
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

//        searchQuery.print();
        System.out.println(endpoint + option + "&safeSearch=Moderate");

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

        return results;
    }

    // Pretty-printer for JSON; uses GSON parser to parse and re-serialize
    public static String prettify(String json_text) {
        JsonObject json = JsonParser.parseString(json_text).getAsJsonObject();
        Gson gson = new GsonBuilder().setPrettyPrinting().disableHtmlEscaping().create();
        return gson.toJson(json);
    }

    //    public static void main(String[] args) {
//        try {
//            System.out.println("Searching the Web for: " + searchTerm);
//
//            BingNewsResult result = SearchNews(searchTerm);
//
//            System.out.println("\nRelevant HTTP Headers:\n");
//            for (String header : result.relevantHeaders.keySet())
//                System.out.println(header + ": " + result.relevantHeaders.get(header));
//
//            System.out.println("\nJSON Response:\n");
//            System.out.println(prettify(result.jsonResponse));
//        } catch (Exception e) {
//            e.printStackTrace(System.out);
//            System.exit(1);
//        }
//    }
}