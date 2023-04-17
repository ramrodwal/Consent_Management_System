package com.consentmanager.entity;

import java.time.LocalDate;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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

    //lazy to eager 
    @ManyToOne(fetch = FetchType.EAGER)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "consentId")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private ConsentManager cm;

    @Id
    @GeneratedValue( strategy= GenerationType.AUTO, generator="native" ) 
    @GenericGenerator( name = "native", strategy = "native" )
    @Column(name = "approvedId",nullable = false)
    private int approvedId;

    @Column(name = "recordId",nullable = false)
    @NonNull
    private int recordId;

    @Column(name = "practitioner_aadhar",nullable = false)
    @NonNull
    @NotBlank(message = "practitioner aadhar cannot be blank")
    private String practitionerAadhar;

    
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
    private LocalDate approvedDate;

    
    @Column(name = "validity",nullable = false)
    private LocalDate validity;
}
