package com.example.demo.service.search;

public class BingNewsCondition {
    private String query = null;
    private String count = null;
    private String offset = null;
    private String mkt = null;

    public BingNewsCondition() {
        query = "COVID19";
        count = "50";
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public String getCount() {
        return count;
    }

    public void setCount(String count) {
        this.count = count;
    }

    public String getOffset() {
        return offset;
    }

    public void setOffset(String offset) {
        this.offset = offset;
    }

    public String getMkt() {
        return mkt;
    }

    public void setMkt(String mkt) {
        this.mkt = mkt;
    }

    public void print() {
        System.out.println("q: " + query + " mkt: " + mkt + " count: " + count + " offset: " + offset);
    }
}
