package com.consentmanager.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.consentmanager.entity.ApprovedRecords;
import com.consentmanager.entity.ConsentManager;
import com.consentmanager.service.ConsentManagerService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/hospital")
public class ConsentController {

    @Autowired
    ConsentManagerService consentManagerService;

    @PostMapping("/practitioner-login/view-patient/consent")
    public ResponseEntity<ConsentManager> requestingConsent(@Valid @RequestBody ConsentManager consentManager) {
        // System.out.println(consentManager.getDiseaseName());
        return new ResponseEntity<ConsentManager>(consentManagerService.requestConsent(consentManager),
                HttpStatus.CREATED);
    }

    @PostMapping("/consent/approve-records")
    public ResponseEntity<Boolean> saveApprovedRecords(@RequestBody List<ApprovedRecords> approvedRecords) {
        boolean saved = false;
        HttpStatus status = HttpStatus.BAD_REQUEST;

        try {
            saved = consentManagerService.savingApprovedRecords(approvedRecords);
            status = saved ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return ResponseEntity.status(status).body(saved);
    }

    @GetMapping("/practitioner-login/view-consent/{practitionerAadhar}")
    public ResponseEntity<List<ConsentManager>> viewConsent(@Valid @PathVariable String practitionerAadhar) {
        // System.out.println(practitionerAadhar);
        return new ResponseEntity<List<ConsentManager>>(consentManagerService.getConsents(practitionerAadhar),
                HttpStatus.OK);
    }

    @GetMapping("/approved-records/{consentId}")
    @Transactional
    public List<ApprovedRecords> getRecords(@Valid @PathVariable Integer consentId) {
        System.out.println(consentId);
        return consentManagerService.getRecordsById(consentId);
    }

}
