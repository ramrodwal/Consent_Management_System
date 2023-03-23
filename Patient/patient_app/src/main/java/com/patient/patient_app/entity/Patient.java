package com.patient.patient_app.entity;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.relational.core.mapping.Table;
import org.springframework.format.annotation.NumberFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
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
    @NotBlank(message = "first name cannot be blank")
    private String fname;
    
    @Column
    private String mname;
    
    @Column(nullable = false)
    @NotBlank(message = "last name cannot be blank")
    private String lname;

    @Column(nullable = false)
    @NotNull(message = "please enter a age")
    @Min(value = 18, message = "only patients above 18 can register")
    private int age;

    @Column(nullable = false)
    @NotBlank(message = "please select a gender")
    private String gender;

    @Column(nullable = false)
    @Email(message = "please enter a valid email")
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
