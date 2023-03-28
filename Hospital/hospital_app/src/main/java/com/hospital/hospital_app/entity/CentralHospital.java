package com.hospital.hospital_app.entity;


import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "centralHospital")
public class CentralHospital {

    //primary key
    @Id 
    @GeneratedValue( strategy= GenerationType.AUTO, generator="native" ) 
    @GenericGenerator( name = "native", strategy = "native" )
    private int hospital_id;
    
    private String hospital_name;

    @Column(unique = true)
    private String contactNumber;

    private String state;

    private String city;

    private String address;

    private String zipcode;

    @JsonIgnore
    @OneToMany(mappedBy = "centralHospital" , cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MedicalPractitioner> medicalPractitioner=new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "centralHospital" , cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MedicalRecords> medicalRecords=new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "centralHospital1" , cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PatientList> patientLists=new ArrayList<>();
    
    
}
