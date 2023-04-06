package com.consentmanager.cm_app.service;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.consentmanager.cm_app.entity.ConsentManager;
import com.consentmanager.cm_app.repository.ConsentManagerRepository;
import com.consentmanager.exception.EntityNotFoundException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class ConsentResponseServiceImpl implements ConsentResponseService {
    private ConsentManagerRepository consentManagerRepository;
    @Override
    public ConsentManager getConsentManager(Integer consent_id) {
        Optional<ConsentManager> optionalConsent=consentManagerRepository.findById(consent_id);
        return unwrapConsentManager(optionalConsent, consent_id);
    }
    static ConsentManager unwrapConsentManager(Optional<ConsentManager> entity, Integer consent_id) {
        if (entity.isPresent()) return entity.get();
        // else throw new EntityNotFoundException(consent_id, ConsentManager.class);
        else throw new EntityNotFoundException(consent_id, ConsentManager.class);
    }

    @Override
    public ConsentManager updateConsent(ConsentManager updatedConsent) {
        Optional<ConsentManager> optionalConsent=consentManagerRepository.findById(updatedConsent.getConsent_id());
        if(!optionalConsent.isPresent()){
            return null;
        }
        ConsentManager existingConsent=optionalConsent.get();
        BeanUtils.copyProperties(updatedConsent, existingConsent, "consent_id");
        return consentManagerRepository.save(existingConsent);
    }
  
   
    
}
