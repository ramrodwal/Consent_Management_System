package com.hospital.hospital_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hospital.hospital_app.entity.PatientList;


public interface PatientRepository extends JpaRepository<PatientList, String>{
    


}
