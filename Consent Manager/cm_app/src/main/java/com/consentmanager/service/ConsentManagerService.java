package com.consentmanager.service;

import java.util.List;
import com.consentmanager.entity.ApprovedRecords;
import com.consentmanager.entity.ConsentManager;

public interface ConsentManagerService {
    ConsentManager requestConsent(ConsentManager consentManager);

    List<ConsentManager> getConsentByPatientAadhar(String patientAadhar);

    Boolean savingApprovedRecords(List<ApprovedRecords> approvedRecords);

    List<ConsentManager> getConsents(String practitionerAadhar);

    List<ApprovedRecords> getRecordsById(Integer consentId);

}
