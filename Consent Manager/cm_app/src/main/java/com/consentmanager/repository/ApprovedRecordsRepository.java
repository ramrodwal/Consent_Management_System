package com.consentmanager.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.consentmanager.entity.ApprovedRecords;

public interface ApprovedRecordsRepository extends JpaRepository<ApprovedRecords, Integer> {

    List<ApprovedRecords> findByPractitionerAadhar(String practitionerAadhar);

    List<ApprovedRecords> findByCm_consentId(Integer consentId);

}
