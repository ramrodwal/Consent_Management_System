package com.hospital.hospital_app.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CentralHospital {

    private int hospital_id;
    private String hospital_name;
    private String number;
    private String state;
    private String city;
    private String address;
    private int zipcode;
    

   

    
}
