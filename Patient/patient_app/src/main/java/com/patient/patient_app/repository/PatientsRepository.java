package com.patient.patient_app.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.patient.patient_app.entity.Patient;

public interface PatientsRepository extends JpaRepository<Patient, String>{
    
    Optional<Patient> findByEmail(String email);

    

}
