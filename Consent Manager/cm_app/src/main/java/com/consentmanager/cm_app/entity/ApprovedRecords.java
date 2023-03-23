package com.consentmanager.cm_app.entity;

import java.time.LocalDate;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name= "approvedRecords")

public class ApprovedRecords {
    
    @Column(name = "practitioner_aadhar",nullable = false)
    @NonNull
    @NotBlank(message = "practitioner aadhar cannot be blank")
    private String practioner_aadhar;

    
    @Column(name = "patient_aadhar",nullable = false)
    @NonNull
    @NotBlank(message = "patient aadhar cannot be blank")
    private String patient_aadhar;

    @Id
    @Column(name = "record_id",nullable = false)
    @NonNull
    @NotBlank(message = "record id cannot be blank")
    private int record_id;

    
    @Column(name = "disease_name",nullable = false)
    @NonNull
    @NotBlank(message = "disease name cannot be blank")
    private String disease_name;

    
    @Column(name = "record",nullable = false)
    @NonNull
    @NotBlank(message = "record  cannot be blank")
    private String record;

    
    @Column(name = "approved_date",nullable = false)
    @NonNull
    @NotBlank(message = "approved date cannot be blank")
    private LocalDate approved_date;

    
    @Column(name = "validity",nullable = false)
    @NonNull
    @NotBlank(message = "validity cannot be blank")
    private LocalDate validity;
}
