package com.hospital.hospital_app.web;


import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.hospital_app.entity.Admin;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/hospital")
public class HospitalController {

    //admin authenticcation
    List<Admin> admin_list=Arrays.asList(
        new Admin("gopalgupta2804@gmail.com","1234"),
        new Admin("ramrodwal121@gmail.com","5678")
    );
    
    @PostMapping("/admin-login")
    public ResponseEntity<Admin> adminLogin(@RequestBody Admin admin){
        for(Admin admin_check: admin_list ){
            if(admin_check.getUsername().equals(admin.getUsername())){
                return new ResponseEntity<>(admin,HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(admin, HttpStatus.BAD_REQUEST);
    }
}
