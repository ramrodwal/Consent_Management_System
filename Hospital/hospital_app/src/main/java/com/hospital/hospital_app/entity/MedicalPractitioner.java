package com.hospital.hospital_app.entity;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

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

    @JsonIgnore
    @OneToMany(mappedBy = "medicalPractitioner", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MedicalRecords> medicalRecords=new ArrayList<>();

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "first name can not be empty")
    private String fname;

    @Column
    private String mname;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "last name can not be empty")
    private String lname;

    @Min(value = 21)
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

    @Pattern(regexp="\\d{10}", message="Invalid phone number")
    @Column(nullable = false,unique = true)
    @NonNull
    @NotBlank(message = "contact number can not be empty")
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

    @Pattern(regexp = "^\\d{6}$", message = "Zipcode must be 6 digits")
    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "zipcode can not be empty")
    private long zipcode;

    @Id
    @Pattern(regexp = "^\\d{12}$", message = "please enter a valid aadhar")
    @Column(nullable = false,unique = true)
    @NonNull
    @NotBlank(message = "aadhar number can not be empty")
    private String practioner_aadhar;

    @Column(nullable = false,unique = true)
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

    @Column(nullable = false,unique = true)
    @NonNull
    @NotBlank(message = "username can not be empty")
    private String username;

    @Column(nullable = false)
    @Size(min = 6)
    @NonNull
    @NotBlank(message = "password can not be empty")
    private String password;

    
    @Column(nullable = false)
    @Size(min = 6)
    @NonNull
    @NotBlank(message = "confirm password can not be empty")
    private String confirmPassword;

    //hid is foreign key refrencing centralhospital hospital_id with on delete cascade 
    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "hospital_id", referencedColumnName = "hospital_id")
    private CentralHospital ch1;

    
    
    


}
