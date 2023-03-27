package com.hospital.hospital_app.repository;

import org.springframework.data.repository.CrudRepository;

import com.hospital.hospital_app.entity.MedicalRecords;

public interface MedicalRecordsRepository extends CrudRepository<MedicalRecords,Integer>{
    
}
