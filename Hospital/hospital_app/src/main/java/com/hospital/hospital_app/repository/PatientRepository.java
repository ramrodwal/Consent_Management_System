package com.hospital.hospital_app.repository;

import org.springframework.data.repository.CrudRepository;

import com.hospital.hospital_app.entity.PatientList;

public interface PatientRepository extends CrudRepository<PatientList, String>{
    
}
