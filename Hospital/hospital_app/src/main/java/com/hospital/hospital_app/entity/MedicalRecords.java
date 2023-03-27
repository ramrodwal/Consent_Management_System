package com.hospital.hospital_app.entity;



import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

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
@Table(name = "MedicalRecords")

public class MedicalRecords {


    //hospital_id is foreign key refrencing centralhospital hospital_id with on delete cascade 
    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "hospital_id", referencedColumnName = "hospital_id")
    private CentralHospital ch2;

    //doctor_id is the foreign key referencing medicalPractitioner practioner_aadhar with on delete cascade 
    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "doctor_id", referencedColumnName = "practioner_aadhar")
    private MedicalPractitioner medicalPractitioner;


    @Column(name = "patient_id",unique = true)
    // @Pattern(regexp = "^\\d{12}$", message = "aadhar number should be of 12 digits")
    @NotBlank(message = "patient aadhar number can not be empty")
    private String patient_aadhar;

    @Id 
    @GeneratedValue( strategy= GenerationType. AUTO, generator="native" ) 
    @GenericGenerator( name = "native", strategy = "native" )
    @Column(name = "record_id")
    private int record_id;

    
    
    @NotBlank(message = "disease name can not be empty")
    private String disease_name;
    //yaha file ka dekhna hai
    
    @NotBlank(message = "patient record can not be empty")
    private String record;

   
}
