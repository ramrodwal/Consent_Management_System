package com.consentmanager.repository;

import org.springframework.data.repository.CrudRepository;

import com.consentmanager.entity.ConsentManager;

public interface ConsentManagerRepository extends CrudRepository<ConsentManager,Integer> {
    
}
