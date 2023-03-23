package com.hospital.hospital_app.entity;

import java.time.LocalDate;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
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

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "practitioner aadhar number can not be empty")
    private String practioner_aadhar;

    @Id
    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "Hospital id can not be empty")
    private int hospital_id;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "patient aadhar number can not be empty")
    private String patient_aadhar;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "record id can not be empty")
    private int record_id;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "disease id can not be empty")
    private int disease_id;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "disease name can not be empty")
    private String disease_name;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "patient record can not be empty")
    private String record;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "date time  can not be empty")
    private LocalDate date; 
}
