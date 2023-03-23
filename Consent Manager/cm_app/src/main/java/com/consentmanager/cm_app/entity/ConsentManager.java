package com.consentmanager.cm_app.entity;




import lombok.AllArgsConstructor;

import lombok.Getter;
import lombok.NoArgsConstructor;

import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor



public class ConsentManager {
    private int hospital_id;
    private String practioner_aadhar;
    private String patient_aadhar;
    private String disease_name;
    private String status;
}
