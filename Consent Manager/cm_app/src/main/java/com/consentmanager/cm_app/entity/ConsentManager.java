package com.consentmanager.cm_app.entity;




import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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

    @JsonIgnore
    @OneToMany(mappedBy = "cm",cascade = CascadeType.ALL,orphanRemoval = true )
    private List<ApprovedRecords> approvedRecords=new ArrayList<>(); 

    @Id
    @Column(name = "consent_id",nullable = false)
    @NonNull
    // @NotBlank(message = "Consent id cannot be blank")
    private int consent_id;

    @Column(name = "hospital_id",nullable = false)
    @NonNull
    // @NotBlank(message = "Hospital id cannot be blank")
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
