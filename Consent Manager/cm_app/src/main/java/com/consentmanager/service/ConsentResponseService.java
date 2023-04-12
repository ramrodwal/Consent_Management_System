package com.consentmanager.service;

import com.consentmanager.entity.ConsentManager;

public interface ConsentResponseService {

    ConsentManager getConsentManager(Integer consent_id);
    ConsentManager updateConsent(ConsentManager consentManager);
}
