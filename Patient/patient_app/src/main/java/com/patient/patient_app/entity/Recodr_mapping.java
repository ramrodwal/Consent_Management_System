package com.patient.patient_app.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Recodr_mapping {
    
    private int hospital_id;
    private String patient_aadhar;
    private String practitioner_aadhar;

}
