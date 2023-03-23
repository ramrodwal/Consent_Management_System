package com.consentmanager.cm_app.entity;

import java.time.LocalDate;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
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
    @JoinColumn(name = "consent_id", referencedColumnName = "consent_id")
    private ConsentManager cm;

    @Id
    @Column(name = "approved_id",nullable = false)
    @NonNull
    @NotBlank(message = "Approved id cannot be blank")
    private int approved_id;

    @Column(name = "record_id",nullable = false)
    @NonNull
    @NotBlank(message = "record id cannot be blank")
    private int record_id;

    @Column(name = "practitioner_aadhar",nullable = false)
    @NonNull
    @NotBlank(message = "practitioner aadhar cannot be blank")
    private String practioner_aadhar;

    
    @Column(name = "patient_aadhar",nullable = false)
    @NonNull
    @NotBlank(message = "patient aadhar cannot be blank")
    private String patient_aadhar;
    
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
