package com.patient.patient_app.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


import org.springframework.data.relational.core.mapping.Table;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "patient")
public class Patient implements UserDetails{
    
    @JsonIgnore
    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
    private List<RecordMapping> recordList = new ArrayList<>();

    @NotBlank
    private String fname;
    
    @Column
    private String mname;
    
    @NotBlank
    private String lname;

    @Column(nullable = false)
    @NonNull
    @Min(value = 18, message = "only patients above 18 can register")
    private int age;

    
    @NotBlank
    private String gender;

    @NotBlank
    @Pattern(regexp="\\d{10}", message="please enter a valid phone number")
    private String contactNo;

    
    @NotBlank
    private String state;

    @NotBlank
    private String city;

    @Column(nullable = false)
    @NotBlank(message = "please enter a zip code!!")
    private String zipcode;

    @NotBlank
    private String address;

    @Id
    @Column( unique = true)
    @Pattern(regexp = "^\\d{12}$", message = "please enter a valid aadhar")
    private String patientAadhar;

    
    @NotBlank
    @Email(message = "please enter a valid email")
    private String email;

    @Size(min = 6)
    @NotBlank
    private String password;

    
    @Size(min = 6)
    @NotBlank
    private String confirmPassword;

    @Enumerated(EnumType.STRING)
    private Role role;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        
        return List.of(new SimpleGrantedAuthority(role.name()));

    }

    @Override
    public String getUsername(){
        return email;
    }

    @Override
    public String getPassword(){
        return password;
    }

    
    public String getPatientAadhar(){
        return patientAadhar;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }


    @Override
    public boolean isAccountNonLocked() {
        return true;
    }


    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }


    @Override
    public boolean isEnabled() {
        return true;
    }



}
