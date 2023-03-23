package com.hospital.hospital_app.entity;

import org.springframework.format.annotation.NumberFormat;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
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
@Table(name = "MedicalPractitioner")
public class MedicalPractioner {

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "first name can not be empty")
    private String fname;

    @Column()
    private String mname;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "last name can not be empty")
    private String lname;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "age can not be empty")
    private int age;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "gender can not be empty")
    private String gender;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "email can not be empty")
    @Email(message = "enter a valid email address")
    private String email;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "number can not be empty")
    @NumberFormat
    private String number;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "state can not be empty")
    private String state;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "city can not be empty")
    private String city;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "address can not be empty")
    private String address;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "zipcode can not be empty")
    private int zipcode;

    @Id
    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "aadhar number can not be empty")
    private String practioner_aadhar;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "medical license id can not be empty")
    private String medical_license_id;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "specialisation can not be empty")
    private String specialisation;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "qualification can not be empty")
    private String qualification;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "username can not be empty")
    private String username;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "password can not be empty")
    private String password;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "confirm password can not be empty")
    private String confirmPassword;

    @Id
    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "hospital id can not be empty")
    private int hospital_id;



}
