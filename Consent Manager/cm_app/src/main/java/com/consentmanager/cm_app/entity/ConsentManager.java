package com.consentmanager.cm_app.entity;


import org.springframework.data.relational.core.mapping.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name= "consentmanager")
@Data


public class ConsentManager {
    private int hospital_id;
    private String practioner_aadhar;
    private String patient_aadhar;
    private String disease_name;
    private String status;
}
