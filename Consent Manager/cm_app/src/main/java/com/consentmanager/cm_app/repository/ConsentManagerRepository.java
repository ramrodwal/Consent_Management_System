package com.consentmanager.cm_app.repository;

import org.springframework.data.repository.CrudRepository;

import com.consentmanager.cm_app.entity.ConsentManager;

public interface ConsentManagerRepository extends CrudRepository<ConsentManager,Integer> {
    
}
