package com.hospital.hospital_app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hospital.hospital_app.entity.MedicalRecords;
import com.hospital.hospital_app.repository.MedicalRecordsRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MedicalRecordsServiceImpl implements MedicalrecordsService {
    
    private MedicalRecordsRepository medicalRecordsRepository;
    @Override
    public MedicalRecords addMedicalRecords(MedicalRecords medicalRecords){
        return medicalRecordsRepository.save(medicalRecords);
    }

    @Override
    public List<MedicalRecords> getEntitiesByName(String patientAadhar) {
        return medicalRecordsRepository.findByPatientAadhar(patientAadhar);
    }
}
