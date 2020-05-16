package com.example.demo.utils;

import java.util.Calendar;
import java.util.Date;

public class TimeHoursAgo {
    public static Date getTimeHoursAgo(int hours) {
        Calendar c = Calendar.getInstance();
        c.setTime(new Date());
        c.set(Calendar.HOUR_OF_DAY, c.get(Calendar.HOUR_OF_DAY) - hours);
        return c.getTime();
    }
}
