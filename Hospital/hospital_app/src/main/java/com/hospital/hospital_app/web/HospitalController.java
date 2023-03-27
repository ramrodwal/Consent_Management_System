package com.hospital.hospital_app.web;


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

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/hospital")
@Component
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
    public ResponseEntity<CentralHospital> hospitalRegistration(@Valid @RequestBody CentralHospital central_hospital){
        System.out.print(central_hospital.getHospital_name());
        hospitalService.registerHospital(central_hospital);
        return new ResponseEntity<CentralHospital>(HttpStatus.CREATED);
    }

}
