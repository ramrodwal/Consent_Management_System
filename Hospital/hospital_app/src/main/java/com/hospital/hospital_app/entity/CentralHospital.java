package com.hospital.hospital_app.entity;


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
import jakarta.validation.constraints.Pattern;
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
    
    @NonNull
    @NotBlank(message = "hospital name can not be empty")
    private String hospital_name;

    @Pattern(regexp="\\d{10}", message="Invalid phone number")
    @Column(unique = true)
    @NonNull
    @NotBlank(message = "hospital contact number can not be empty")
    private String contactNumber;

    @NonNull
    @NotBlank(message = "state can not be empty")
    private String state;

    @NonNull
    @NotBlank(message = "city can not be empty")
    private String city;

    @NonNull
    @NotBlank(message = "address can not be empty")
    private String address;


    @NotBlank(message = "zipcode can not be empty")
    private String zipcode;

    @JsonIgnore
    @OneToMany(mappedBy = "centralHospital" , cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MedicalPractitioner> mp1=new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "ch2" , cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MedicalRecords> mr1=new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "centralHospital1" , cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PatientList> pl1=new ArrayList<>();
    
    
}
