package com.consentmanager.cm_app.entity;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ApprovedRecords {
    private String practioner_aadhar;
    private String patient_aadhar;
    private int record_id;
    private String disease_name;
    private String record;
    private LocalDate approved_date;
    private LocalDate validity;


}
