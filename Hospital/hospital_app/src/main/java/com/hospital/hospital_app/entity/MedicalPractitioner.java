package com.hospital.hospital_app.entity;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
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
public class MedicalPractitioner {

    @NotBlank(message = "first name can not be empty")
    private String fname;

    private String mname;

    @NotBlank(message = "last name can not be empty")
    private String lname;

    @Column(nullable = false)
    @Min(value = 21)
    @NonNull
    private int age;

    @NotBlank(message = "gender can not be empty")
    private String gender;

    @NotBlank(message = "email can not be empty")
    @Email(message = "enter a valid email address")
    private String email;

    @Column(unique = true)
    @NotBlank(message = "username can not be empty")
    private String username;

    @Pattern(regexp="\\d{10}", message="Invalid phone number")
    @Column(unique = true)
    @NotBlank(message = "contact number can not be empty")
    private String number;

    @NotBlank(message = "state can not be empty")
    private String state;

    @NotBlank(message = "city can not be empty")
    private String city;

    @NotBlank(message = "address can not be empty")
    private String address;

    @NotBlank(message = "zipcode can not be empty")
    private String zipcode;

    @Id
    @Pattern(regexp = "^\\d{12}$", message = "please enter a valid aadhar")
    @Column(unique = true)
    @NotBlank(message = "aadhar number can not be empty")
    private String practitioner_aadhar;

    @Column(unique = true)
    @NotBlank(message = "medical license id can not be empty")
    private String medical_license_id;

    @NotBlank(message = "specialisation can not be empty")
    private String specialisation;

    @NotBlank(message = "qualification can not be empty")
    private String qualification;

    @Size(min = 6)
    @NotBlank(message = "password can not be empty")
    private String password;

    @Size(min = 6)
    @NotBlank(message = "confirm password can not be empty")
    private String confirmPassword;

    //hid is foreign key refrencing centralhospital hospital_id with on delete cascade 
    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "hospital_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private CentralHospital centralHospital;



    @JsonIgnore
    @OneToMany(mappedBy = "medicalPractitioner", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MedicalRecords> medicalRecords=new ArrayList<>();
}
