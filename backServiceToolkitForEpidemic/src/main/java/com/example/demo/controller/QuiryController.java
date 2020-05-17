package com.example.demo.controller;

import com.example.demo.service.QuiryService;
import com.example.demo.utils.MyUtils;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;

@RestController
public class QuiryController {
    /**
     * @func:
     */
    MyUtils myUtils = new MyUtils();
    QuiryService quiryService = new QuiryService();


    @GetMapping(value = "/quiryhospital")
    public String returnHospital(@Param("city") String city) {
        return myUtils.prettify(quiryService.getHospitalPosition(city));
    }

    @GetMapping(value = "/quirymedicine")
    public String returnMedicine(@Param("city") String city) {
        return myUtils.prettify(quiryService.getMedicinePosition(city));
    }

    @GetMapping(value = "/quirymask")
    public String returnMask(@Param("number") String number){
        return myUtils.prettify(quiryService.quiryMask(number));
    }
}
