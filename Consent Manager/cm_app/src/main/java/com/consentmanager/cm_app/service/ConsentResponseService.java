package com.consentmanager.cm_app.service;

import com.consentmanager.cm_app.entity.ConsentManager;

public interface ConsentResponseService {

    ConsentManager getConsentManager(Integer consent_id);
    ConsentManager updateConsent(ConsentManager consentManager);
}
