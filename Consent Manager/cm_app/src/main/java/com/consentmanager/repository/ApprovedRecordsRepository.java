package com.consentmanager.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.consentmanager.entity.ApprovedRecords;

public interface ApprovedRecordsRepository extends CrudRepository<ApprovedRecords,Integer> {

    List<ApprovedRecords> findByPractitionerAadhar(String practitionerAadhar);

    List<ApprovedRecords> findByCm_consentId(Integer consentId);

    
}
