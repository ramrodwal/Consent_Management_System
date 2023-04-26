package com.consentmanager.entity;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.GenericGenerator;
import com.fasterxml.jackson.annotation.JsonIgnore;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
@Table(name = "consentManager")

public class ConsentManager {

    @JsonIgnore
     //@OneToMany(mappedBy = "cm", cascade = CascadeType.ALL, orphanRemoval = true)
    @OneToMany(mappedBy = "cm", cascade = CascadeType.ALL)
    private List<ApprovedRecords> approvedRecords = new ArrayList<>();

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    @Column(name = "consentId", nullable = false)
    private int consentId;

    @Column(name = "hospitalId", nullable = false)
    @NonNull
    private int hospitalId;

    @NotBlank(message = "practitioner aadhar cannot be blank")
    private String practitionerAadhar;

    @Column(name = "patientAadhar")
    @NotBlank(message = "Patient aadhar can not be empty")
    private String patientAadhar;

    @Column(name = "diseaseName")
    @NotBlank(message = "disease name cannot be blank")
    private String diseaseName;

    @Column(name = "status")
    private String status = "pending";
}
