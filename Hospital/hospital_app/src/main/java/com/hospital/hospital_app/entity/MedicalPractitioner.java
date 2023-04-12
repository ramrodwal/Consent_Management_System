package com.hospital.hospital_app.entity;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "MedicalPractitioner")
public class MedicalPractitioner {

    @Id
    private String practitionerAadhar;

    private String fname;

    private String mname;

    private String lname;

    private int age;

    private String gender;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String username;

    @Column(unique = true)
    private String number;

    private String state;

    private String city;

    private String address;

    private String zipcode;

    @Column(unique = true)
    private String medical_license_id;

    private String specialisation;

    private String qualification;

    private String password;

    private String confirmPassword;

    @JsonIgnore
    @OneToMany(mappedBy = "medicalPractitioner", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MedicalRecords> medicalRecords=new ArrayList<>();

    //hid is foreign key refrencing centralhospital hospital_id with on delete cascade 
    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "hospital_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private CentralHospital centralHospital;

    @JsonIgnore
    @OneToMany(mappedBy = "medicalPractitioner" , cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PatientList> patientLists=new ArrayList<>();

}
