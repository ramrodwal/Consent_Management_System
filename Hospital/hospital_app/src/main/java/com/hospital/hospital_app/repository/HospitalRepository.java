package com.hospital.hospital_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import com.hospital.hospital_app.entity.CentralHospital;


public interface HospitalRepository extends JpaRepository<CentralHospital, Integer>{
    
}




