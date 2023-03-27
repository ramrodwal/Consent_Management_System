package com.patient.patient_app.service;

import com.patient.patient_app.entity.Patient;

public interface PatientService {

    Patient registerPatient(Patient patient);
    Patient getPatient(String patient_aadhar);
    
}
