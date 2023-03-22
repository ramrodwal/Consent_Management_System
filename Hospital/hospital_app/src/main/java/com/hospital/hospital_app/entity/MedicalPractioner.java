package com.hospital.hospital_app.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MedicalPractioner {
    private String fname;
    private String mname;
    private String lname;
    private int age;
    private String gender;
    private String email;
    private String number;
    private String state;
    private String city;
    private String address;
    private int zipcode;
    private String practioner_aadhar;
    private String medical_license_id;
    private String specialisation;
    private String qualification;
    private String username;
    private String password;
    private String confirmPassword;
    private int hospital_id;



}
