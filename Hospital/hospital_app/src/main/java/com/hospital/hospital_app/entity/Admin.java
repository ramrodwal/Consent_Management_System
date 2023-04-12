package com.hospital.hospital_app.entity;


import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "admin_details")

public class Admin {

    @Id 
    @GeneratedValue( strategy= GenerationType.AUTO, generator="native" ) 
    @GenericGenerator( name = "native", strategy = "native" )
    private int adminId;

  

    private String password;

    private String username;

}
