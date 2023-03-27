package com.patient.patient_app.repository;

import org.springframework.data.repository.CrudRepository;

import com.patient.patient_app.entity.Patient;

public interface PatientsRepository extends CrudRepository<Patient, String>{
    
}
