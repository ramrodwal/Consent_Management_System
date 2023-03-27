package com.hospital.hospital_app.web;


import java.io.Console;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.hospital_app.entity.Admin;
import com.hospital.hospital_app.entity.CentralHospital;
import com.hospital.hospital_app.service.HospitalService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/hospital")
public class HospitalController {

    //this is tight coupling (not recommended, makes unit testing impossible), will do loose coupling 
    //solution in dependency injection
    @Autowired
    HospitalService hospitalService;
    
    //admin login authentication check
    @PostMapping("/admin-login")
    public ResponseEntity<Admin> adminLogin(@RequestBody Admin admin){

        return new ResponseEntity<Admin>(admin, null);
    }

    //hospital registratrion 
    @PostMapping("/admin-login/register-hospital")
    public ResponseEntity<CentralHospital> hospitalRegistration(@RequestBody CentralHospital central_hospital){
        System.out.println(central_hospital.getHospital_name());
        return new ResponseEntity<CentralHospital>(central_hospital, null);
    }

}
