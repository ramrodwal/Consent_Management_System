package com.hospital.hospital_app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import com.hospital.hospital_app.entity.MedicalPractitioner;

public interface PractitionerRepository extends JpaRepository<MedicalPractitioner , String > {

    Optional<MedicalPractitioner> findByEmail(String email);

    List<MedicalPractitioner> findByCentralHospital_hospitalId(Integer hospitalId);
    
}
