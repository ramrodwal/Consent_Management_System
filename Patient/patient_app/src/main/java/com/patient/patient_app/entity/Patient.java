package com.patient.patient_app.entity;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.relational.core.mapping.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
@Table(name = "Patient")
public class Patient {
    
    @JsonIgnore
    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RecordMapping> recordList = new ArrayList<>();

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
    @Pattern(regexp="\\d{10}", message="please enter a valid phone number")
    private String contactNo;

    @Column(nullable = false)
    @NotBlank(message = "enter a state")
    @NotNull
    private String state;

    @Column(nullable = false)
    @NotBlank(message = "enter a city")
    @NotNull
    private String city;

    @Column(nullable = false)
    @NotNull
    @Pattern(regexp = "^\\d{6}$", message = "Zipcode must be 6 digits")
    private int zipcode;

    @Column(nullable = false)
    @NotBlank(message = "please enter a address")
    @NotNull
    private String address;

    @Column(nullable = false, unique = true)
    @NotBlank
    @NotNull
    @Id
    @Pattern(regexp = "^\\d{12}$", message = "please enter a valid aadhar")
    private String patient_aadhar;

    @Column(nullable = false, unique = true)
    @NotBlank
    @NotNull
    private String username;

    @Column(nullable = false)
    @Size(min = 6)
    @NotBlank
    @NotNull
    private String password;

    @Column(nullable = false)
    @Size(min = 6)
    @NotBlank
    @NotNull
    private String confirmPassword;  


}
