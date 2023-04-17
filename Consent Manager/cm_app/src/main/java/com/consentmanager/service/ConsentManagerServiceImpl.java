package com.consentmanager.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.consentmanager.repository.ApprovedRecordsRepository;
import com.consentmanager.repository.ConsentManagerRepository;

import jakarta.validation.constraints.Null;

import com.consentmanager.entity.ApprovedRecords;
import com.consentmanager.entity.ConsentManager;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ConsentManagerServiceImpl implements ConsentManagerService {

    private ConsentManagerRepository consentManagerRepository;
    private ApprovedRecordsRepository approvedRecordsRepository;

    @Override
    public ConsentManager requestConsent(ConsentManager consentManager) {
        return consentManagerRepository.save(consentManager);
    }

    @Override
    public List<ConsentManager> getConsentByPatientAadhar(String patientAadhar) {
        return consentManagerRepository.findByPatientAadhar(patientAadhar);
    }

    @Override
    public Boolean savingApprovedRecords(List<ApprovedRecords> approvedRecords) {

        if (approvedRecords.size() == 0) {
            System.out.println("empty list is passed");
            return false;
        } else {

            for (ApprovedRecords records : approvedRecords) {
                approvedRecordsRepository.save(records);
            }

            return true;
        }

    }

    // @Override
    // public ApprovedRecords saveRecord(ApprovedRecords approvedRecords) {

    // return approvedRecordsRepository.save(approvedRecords);

    // }

}
