package com.hospital.hospital_app.entity;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "MedicalRecords")

public class MedicalRecords {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private int recordId;

    @Column(name = "patientAadhar")
    private String patientAadhar;

    private String diseaseName;

    private String record;

    // hospital_id is foreign key refrencing centralhospital hospital_id with on
    // delete cascade
    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "hospitalId")
    @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
    private CentralHospital centralHospital;

    // practitioner_aadhar is the foreign key referencing medicalPractitioner
    // practioner_aadhar with on delete cascade
    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "practitionerAadhar")
    @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
    private MedicalPractitioner medicalPractitioner;

    

}
