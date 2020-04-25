package com.example.demo.search;

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

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

/**
 * This sample uses the Bing News Search with a text query to get all news on the topic.
 * <p>
 * Gson: https://github.com/google/gson
 * Maven info:
 * groupId: com.google.code.gson
 * artifactId: gson
 * version: x.x.x
 * <p>
 * Place the Gson jar in the same folder as this file (BingNewsSearch.java),
 * then compile and run from the command line:
 * javac BingNewsSearch.java -classpath .;gson-2.8.6.jar -encoding UTF-8
 * java -cp .;gson-2.8.6.jar BingNewsSearch
 */

public class BingNewsSearch {

    // Add your Bing Search V7 subscription key to your environment variables.
    static String subscriptionKey = "57bd1c41c9af472fb77d9a91409bf820";

    // Add your Bing Search V7 endpoint to your environment variables.
    static String endpoint = "https://api.cognitive.microsoft.com/bing/v7.0/news/search";
    static String searchTerm = "COVID19";

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

    public static BingNewsResult SearchNews(String searchQuery) throws Exception {
        // Construct URL of search request (endpoint + query string)
        URL url = new URL(endpoint + "?q=" + URLEncoder.encode(searchQuery, "UTF-8"));
        HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();
        connection.setRequestProperty("Ocp-Apim-Subscription-Key", subscriptionKey);

        // Receive JSON body
        InputStream stream = connection.getInputStream();
        Scanner scanner = new Scanner(stream);
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
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        return gson.toJson(json);
    }
}