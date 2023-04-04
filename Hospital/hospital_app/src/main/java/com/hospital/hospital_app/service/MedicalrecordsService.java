package com.hospital.hospital_app.service;

import java.util.List;

import com.hospital.hospital_app.entity.MedicalRecords;

public interface MedicalrecordsService {
    
    MedicalRecords addMedicalRecords(MedicalRecords medicalRecords);
    List<MedicalRecords> getEntitiesByName(String patientAadhar);

}
