package com.patient.patient_app.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MedicalRecords {

    private int record_id;

    private String patient_aadhar;

    private String disease_name;
    
    private String record;

    private int hospital_id;

    private String practitioner_aadhar;
   
}
