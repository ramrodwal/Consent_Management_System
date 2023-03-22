package com.hospital.hospital_app.entity;

import java.time.LocalDate;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Medical_Records {
    private int hospital_id;
    private String practioner_aadhar;
    private String patient_aadhar;
    private int record_id;
    private int disease_id;
    private String disease_name;
    private String record;
    private LocalDate date; 
}
