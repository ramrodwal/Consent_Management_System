package com.hospital.hospital_app.entity;

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

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "PatientList")

public class PatientList {
        @Id
        @Column(nullable = false)
        @NonNull
        @NotBlank(message = "hospital id can not be empty")
        private int hospital_id;

        @Column(nullable = false)
        @NonNull
        @NotBlank(message = "patient aadhar number can not be empty")
        private String patient_aadhar;

}
