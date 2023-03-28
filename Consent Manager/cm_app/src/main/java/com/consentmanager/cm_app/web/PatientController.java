package com.consentmanager.cm_app.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.consentmanager.cm_app.entity.ConsentManager;
import com.consentmanager.cm_app.service.ConsentManagerService;
import com.consentmanager.cm_app.service.ConsentResponseService;

import jakarta.validation.Valid;
import jakarta.validation.OverridesAttribute.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/patient")
public class PatientController {
    
    @Autowired
    ConsentResponseService consentResponseService;
    @PutMapping("/login/consentManager/responseConsent/{consent_id}")
    public ResponseEntity<ConsentManager> updateStatus(@Valid @RequestBody ConsentManager updatedConsentManager,@PathVariable Integer consent_id ){
        
        ConsentManager existingConsentManager= consentResponseService.getConsentManager(consent_id);
        if(existingConsentManager==null){
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(consentResponseService.updateConsent(updatedConsentManager), HttpStatus.CREATED);
        
    }

    @GetMapping("/login/consentManager/view-response/{consent_id}")
        public ResponseEntity<ConsentManager> viewResponse(@PathVariable Integer consent_id) {
            System.out.println(consent_id);
            return new ResponseEntity<>(consentResponseService.getConsentManager(consent_id), HttpStatus.OK);
            
        }
    
    
}
