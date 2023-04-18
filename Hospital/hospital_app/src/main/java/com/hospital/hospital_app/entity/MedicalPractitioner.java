package com.hospital.hospital_app.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "MedicalPractitioner")
//implementing UserDetails in order to access user details
public class MedicalPractitioner implements UserDetails{

    @Id
    private String practitionerAadhar;

    private String fname;

    private String mname;

    private String lname;

    private int age;

    private String gender;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String username;

    @Column(unique = true)
    private String number;

    private String state;

    private String city;

    private String address;

    private String zipcode;

    @Column(unique = true)
    private String medicalLicenseId;

    private String specialisation;

    private String qualification;

    private String password;

    private String confirmPassword;

    @Enumerated(EnumType.STRING)
    private Role role;

    @JsonIgnore
    @OneToMany(mappedBy = "medicalPractitioner", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MedicalRecords> medicalRecords=new ArrayList<>();

    //hid is foreign key refrencing centralhospital hospital_id with on delete cascade 
    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "hospitalId")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private CentralHospital centralHospital;

    @JsonIgnore
    @OneToMany(mappedBy = "medicalPractitioner" , cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PatientList> patientLists=new ArrayList<>();

    //implements methods
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
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

    @Override
    public String getUsername(){
        return email;
    }

    @Override
    public String getPassword(){
        return password;
    }

    public String getPractitionerAadhar(){
        return practitionerAadhar;
    }


}
