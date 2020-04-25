package com.example.demo.search;

import java.util.HashMap;

// Container class for search results encapsulates relevant headers and JSON data
public class BingNewsResult {
    public HashMap<String, String> relevantHeaders;
    public String jsonResponse;

    BingNewsResult(HashMap<String, String> headers, String json) {
        relevantHeaders = headers;
        jsonResponse = json;
    }
}
