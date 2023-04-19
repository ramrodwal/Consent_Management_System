package com.hospital.hospital_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hospital.hospital_app.entity.PatientList;
import java.util.List;
import java.util.Optional;


public interface PatientListRepository extends JpaRepository<PatientList, String>{
    
     List<PatientList> findByMedicalPractitioner_practitionerAadhar(String practitionerAadhar);

    Optional<PatientList> findByPatientAadhar(String patientAadhar);

}
