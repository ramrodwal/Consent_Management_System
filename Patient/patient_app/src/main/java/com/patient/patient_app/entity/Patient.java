package com.patient.patient_app.entity;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import com.fasterxml.jackson.core.sym.Name;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Patient {
    
    
    private String fname;
    private String mname;
    private String lname;
    private int age;
    private String gender;
    private String email;
    private String contactNo;
    private String state;
    private String city;
    private int zipcode;
    private String address;
    private String patient_aadhar;
    private String username;
    private String password;
    private String confirmPassword;  

}
