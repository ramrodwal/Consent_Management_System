package com.consentmanager.web;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.consentmanager.entity.ConsentManager;
import com.consentmanager.service.ConsentManagerService;
import com.consentmanager.service.ConsentResponseService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/patient")
public class PatientController {
    
    @Autowired
    ConsentResponseService consentResponseService;
    @Autowired
    ConsentManagerService consentManagerService;
    
    @PostMapping("/login/consentManager/responseConsent/{consent_id}")
    public ResponseEntity<ConsentManager> updateStatus(@Valid @RequestBody ConsentManager updatedConsentManager,@PathVariable Integer consent_id ){
        
        ConsentManager existingConsentManager= consentResponseService.getConsentManager(consent_id);
        if(existingConsentManager==null){
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(consentResponseService.updateConsent(updatedConsentManager), HttpStatus.OK);
        
    }

    @GetMapping("/login/consentManager/view-response/{consent_id}")
        public ResponseEntity<ConsentManager> viewResponse(@PathVariable Integer consent_id) {
            System.out.println(consent_id);
            return new ResponseEntity<>(consentResponseService.getConsentManager(consent_id), HttpStatus.OK);
        }
    
    @GetMapping("/view-consent/{patientAadhar}")
    public ResponseEntity<List<ConsentManager>> viewConsent(@Valid @PathVariable String patientAadhar ){

        return new ResponseEntity<List<ConsentManager>>(consentManagerService.getConsentByPatientAadhar(patientAadhar),HttpStatus.OK);
    }

    
}
