package com.patient.patient_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.patient.patient_app.entity.Patient;
import com.patient.patient_app.repository.PatientRepository;

@Service
public class PatientService {
    
    @Autowired
    PatientRepository patientRepository;

    public Patient savPatient(Patient patient1){
        return patientRepository.save(patient1);
    }
}
