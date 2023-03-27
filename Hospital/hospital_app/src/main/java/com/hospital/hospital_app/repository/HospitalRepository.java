package com.hospital.hospital_app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hospital.hospital_app.entity.CentralHospital;

// @Component
@Repository
public interface HospitalRepository extends CrudRepository<CentralHospital, Integer>{
    
}
