package com.consentmanager.cm_app.service;

import java.util.List;

import com.consentmanager.cm_app.entity.ConsentManager;

public interface ConsentManagerService {
    ConsentManager requestConsent(ConsentManager consentManager);
    List<ConsentManager> getAllDetails();
}
