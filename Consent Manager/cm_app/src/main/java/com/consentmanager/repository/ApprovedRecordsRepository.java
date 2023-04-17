package com.consentmanager.repository;

import org.springframework.data.repository.CrudRepository;

import com.consentmanager.entity.ApprovedRecords;

public interface ApprovedRecordsRepository extends CrudRepository<ApprovedRecords,Integer> {
    
}
