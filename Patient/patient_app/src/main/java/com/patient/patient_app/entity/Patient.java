package com.patient.patient_app.entity;

import org.springframework.data.relational.core.mapping.Table;
import org.springframework.format.annotation.NumberFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
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
@Entity
@Table(name = "Patient")
public class Patient {
    
    @Column(nullable = false)
    @NotBlank
    private String fname;
    
    @Column
    private String mname;
    
    @Column(nullable = false)
    @NotBlank
    private String lname;

    @Column(nullable = false)
    @NotNull
    private int age;

    @Column(nullable = false)
    @NotBlank
    private String gender;

    @Column(nullable = false)
    @Email
    @NotNull
    private String email;

    @Column
    @NumberFormat
    private String contactNo;

    @Column(nullable = false)
    @NotBlank
    @NotNull
    private String state;

    @Column(nullable = false)
    @NotBlank
    @NotNull
    private String city;

    @Column(nullable = false)
    @NotNull
    private int zipcode;

    @Column(nullable = false)
    @NotBlank
    @NotNull
    private String address;

    @Column(nullable = false)
    @NotBlank
    @NotNull
    @Id
    private String patient_aadhar;

    @Column(nullable = false)
    @NotBlank
    @NotNull
    private String username;

    @Column(nullable = false)
    @NotBlank
    @NotNull
    private String password;

    @Column(nullable = false)
    @NotBlank
    @NotNull
    private String confirmPassword;  

}
