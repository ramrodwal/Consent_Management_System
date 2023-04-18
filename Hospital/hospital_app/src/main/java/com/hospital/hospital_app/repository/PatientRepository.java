package com.hospital.hospital_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.hospital.hospital_app.entity.PatientList;
import java.util.List;


public interface PatientRepository extends JpaRepository<PatientList, String>{
    


}
