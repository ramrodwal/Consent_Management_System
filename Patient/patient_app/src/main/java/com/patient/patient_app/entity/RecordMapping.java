package com.patient.patient_app.entity;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
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
@Table(name="Record_Mapping")
public class RecordMapping {
    
    @Column(nullable = false)
    @Id 
    @GeneratedValue( strategy= GenerationType.AUTO, generator="native" ) 
    @GenericGenerator( name = "native", strategy = "native" )
    private String Id;

    @Column(nullable = false)
    @NotBlank
    @NotNull
    private int hospital_id;

    //patient_Id is foreign key refrencing patien's patient_aadhar with on delete cascade 
    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "patient_Id", referencedColumnName = "patient_aadhar")
    private Patient patient;

}
