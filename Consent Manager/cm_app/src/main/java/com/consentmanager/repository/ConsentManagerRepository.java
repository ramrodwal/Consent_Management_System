package com.consentmanager.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.consentmanager.entity.ConsentManager;

public interface ConsentManagerRepository extends CrudRepository<ConsentManager,Integer> {  
    
    List<ConsentManager> findByPatientAadhar(String patientAadhar);
    List<ConsentManager> findByPractitionerAadhar(String practitionerAadhar);

}
