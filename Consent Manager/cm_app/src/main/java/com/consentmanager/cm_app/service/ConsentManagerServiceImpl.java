package com.consentmanager.cm_app.service;

import org.springframework.stereotype.Service;

import com.consentmanager.cm_app.entity.ConsentManager;
import com.consentmanager.cm_app.repository.ConsentManagerRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ConsentManagerServiceImpl implements ConsentManagerService {

    private ConsentManagerRepository consentManagerRepository;
    @Override
    public ConsentManager requestConsent(ConsentManager consentManager){
        return consentManagerRepository.save(consentManager);
    }
    
}
