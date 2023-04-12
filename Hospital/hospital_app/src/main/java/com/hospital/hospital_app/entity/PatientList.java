package com.hospital.hospital_app.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
@Table(name = "PatientList")

public class PatientList {


        //hid is foreign key refrencing centralhospital hospital_id with on delete cascade 
        @ManyToOne(fetch = FetchType.LAZY)
        @OnDelete(action = OnDeleteAction.CASCADE)
        @JoinColumn(name = "hospitalId")
        @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
        private CentralHospital centralHospital1;

        @Id
        // @Pattern(regexp = "^\\d{12}$", message = "Please enter a valid aadhar number")
        @NotBlank(message = "patient aadhar number can not be empty")
        private String patientAadhar;

        @NotBlank(message = "please enter a valid name")
        private String patientName;


        //hid is foreign key refrencing centralhospital hospital_id with on delete cascade 
        @ManyToOne(fetch = FetchType.LAZY)
        @OnDelete(action = OnDeleteAction.CASCADE)
        @JoinColumn(name = "practitionerAadhar")
        @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
        private MedicalPractitioner medicalPractitioner;
        
        

}
