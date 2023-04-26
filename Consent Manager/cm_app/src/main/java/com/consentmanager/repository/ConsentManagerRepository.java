package com.consentmanager.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.consentmanager.entity.ConsentManager;

public interface ConsentManagerRepository extends JpaRepository<ConsentManager, Integer> {

    List<ConsentManager> findByPatientAadhar(String patientAadhar);

    Optional<ConsentManager> findById(Integer consentId);

    List<ConsentManager> findByPractitionerAadhar(String practitionerAadhar);

}
