package com.hospital.hospital_app.web;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    
    HospitalService hospitalService=new HospitalService();
    
    //admin login authentication check
    @PostMapping("/admin-login")
    public ResponseEntity<Admin> adminLogin(@RequestBody Admin admin){

        int status=hospitalService.checkAdminCred(admin);
        if(status==2){
            return new ResponseEntity<>(admin, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(admin, HttpStatus.BAD_REQUEST); 
        }
    }

    //hospital registratrion 
    @PostMapping("/admin-login/register-hospital")
    public ResponseEntity<CentralHospital> hospitalRegistration(@RequestBody CentralHospital central_hospital){
        return new ResponseEntity<CentralHospital>(central_hospital, null);
    }
}
