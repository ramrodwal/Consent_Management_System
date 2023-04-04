package com.hospital.hospital_app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hospital.hospital_app.entity.MedicalRecords;

public interface MedicalRecordsRepository extends JpaRepository<MedicalRecords,Integer>{
    List<MedicalRecords> findByPatientAadhar(String patientAadhar);
    
}
