package com.patient.patient_app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.patient.patient_app.entity.Patient;

@Repository
public interface PatientRepository extends CrudRepository<Patient,Long> {
    
}
