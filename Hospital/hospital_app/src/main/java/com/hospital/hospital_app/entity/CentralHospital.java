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

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "centralHospital")
public class CentralHospital {

    @Id
    @Column(name = "hospital_id",nullable = false)
    private int hospital_id;
    
    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "hospital name can not be empty")
    private String hospital_name;

    @Column(nullable = false)
    @NonNull
    @NotBlank(message = "hospital number can not be empty")
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
    @NotBlank(message = "zipcode can not be blank")
    private int zipcode;
    
}
