package com.patient.patient_app.entity;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Recodr_mapping {
    
    @Column(nullable = false)
    @NotBlank
    @NotNull
    private int hospital_id;

    @Column(nullable = false)
    @NotBlank
    @NotNull
    private String patient_aadhar;

    @Column(nullable = false)
    @NotBlank
    @NotNull
    private String practitioner_aadhar;

}
