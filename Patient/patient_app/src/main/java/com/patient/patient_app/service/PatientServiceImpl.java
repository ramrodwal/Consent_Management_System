package com.patient.patient_app.service;

import org.springframework.stereotype.Service;

import com.patient.patient_app.entity.Patient;
import com.patient.patient_app.repository.PatientsRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PatientServiceImpl implements PatientService{

    PatientsRepository patientsRepository;

    @Override
    public Patient registerPatient(Patient patient) {
        
        return patientsRepository.save(patient);

    }
    
}
