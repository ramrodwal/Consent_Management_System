package com.consentmanager.service;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.consentmanager.repository.ConsentManagerRepository;
import com.consentmanager.entity.ConsentManager;
import com.consentmanager.exception.EntityNotFoundException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class ConsentResponseServiceImpl implements ConsentResponseService {
    private ConsentManagerRepository consentManagerRepository;

    @Override
    public ConsentManager getConsentManager(Integer consentId) {
        Optional<ConsentManager> optionalConsent = consentManagerRepository.findById(consentId);
        return unwrapConsentManager(optionalConsent, consentId);
    }

    static ConsentManager unwrapConsentManager(Optional<ConsentManager> entity, Integer consentId) {
        if (entity.isPresent())
            return entity.get();
        // else throw new EntityNotFoundException(consent_id, ConsentManager.class);
        else
            throw new EntityNotFoundException(consentId, ConsentManager.class);
    }

    @Override
    public ConsentManager updateConsent(ConsentManager updatedConsent) {
        Optional<ConsentManager> optionalConsent = consentManagerRepository.findById(updatedConsent.getConsentId());
        if (!optionalConsent.isPresent()) {
            return null;
        }
        ConsentManager existingConsent = optionalConsent.get();
        BeanUtils.copyProperties(updatedConsent, existingConsent, "consentId");
        return consentManagerRepository.save(existingConsent);
    }

}
