package com.consentmanager.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.consentmanager.repository.ConsentManagerRepository;
import com.consentmanager.entity.ConsentManager;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ConsentManagerServiceImpl implements ConsentManagerService {

    private ConsentManagerRepository consentManagerRepository;
    @Override
    public ConsentManager requestConsent(ConsentManager consentManager){
        return consentManagerRepository.save(consentManager);
    }

    @Override
    public List<ConsentManager> getConsentByPatientAadhar(String patientAadhar){
        return consentManagerRepository.findByPatientAadhar(patientAadhar);
    }

   
    
}
