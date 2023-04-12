package com.consentmanager.entity;

import java.time.LocalDate;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
// @IdClass(ApprovedId.class)

public class ApprovedRecords {

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "consentId", referencedColumnName = "consentId")
    private ConsentManager cm;

    @Id
    @Column(name = "approvedId",nullable = false)
    @NonNull
    @NotBlank(message = "Approved id cannot be blank")
    private int approvedId;

    @Column(name = "recordId",nullable = false)
    @NonNull
    @NotBlank(message = "record id cannot be blank")
    private int recordId;

    @Column(name = "practitioner_aadhar",nullable = false)
    @NonNull
    @NotBlank(message = "practitioner aadhar cannot be blank")
    private String practionerAadhar;

    
    @Column(name = "patientAadhar",nullable = false)
    @NonNull
    @NotBlank(message = "patient aadhar cannot be blank")
    private String patientAadhar;
    
    @Column(name = "diseaseName",nullable = false)
    @NonNull
    @NotBlank(message = "disease name cannot be blank")
    private String diseaseName;

    
    @Column(name = "record",nullable = false)
    @NonNull
    @NotBlank(message = "record  cannot be blank")
    private String record;

    
    @Column(name = "approvedDate",nullable = false)
    @NonNull
    @NotBlank(message = "approved date cannot be blank")
    private LocalDate approvedDate;

    
    @Column(name = "validity",nullable = false)
    @NonNull
    @NotBlank(message = "validity cannot be blank")
    private LocalDate validity;
}
