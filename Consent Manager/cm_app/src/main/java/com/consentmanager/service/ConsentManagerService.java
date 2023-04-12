package com.consentmanager.service;

import java.util.List;

import com.consentmanager.entity.ConsentManager;

public interface ConsentManagerService {
    ConsentManager requestConsent(ConsentManager consentManager);
    List<ConsentManager> getAllDetails();
}
