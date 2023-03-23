package com.consentmanager.cm_app.entity;




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
// import lombok.Value;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name= "consentManager")


public class ConsentManager {
    @Id
    @Column(name = "hospital_id",nullable = false)
    @NonNull
    @NotBlank(message = "Hospital id cannot be blank")
    private int hospital_id;

    
    @Column(name = "practitioner_aadhar",nullable = false)
    @NonNull
    @NotBlank(message = "practitioner aadhar cannot be blank")
    private String practioner_aadhar;

    
    @Column(name = "patient_aadhar",nullable = false)
    @NonNull
    @NotBlank(message = "Patient aadhar can not be empty")
    private String patient_aadhar;

    
    @Column(name = "disease_name",nullable = false)
    @NonNull
    @NotBlank(message = "disease name cannot be blank")
    private String disease_name;


    @Column(name = "status",nullable = false)
    @NonNull
    @NotBlank(message = "status cannot be blank")
    // @Value("pending")
    private String status="pending";
}
