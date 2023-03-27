package com.hospital.hospital_app.repository;

import org.springframework.data.repository.CrudRepository;
import com.hospital.hospital_app.entity.MedicalPractitioner;

public interface PractitionerRepository extends CrudRepository<MedicalPractitioner , String > {
    
}
