package com.consentmanager.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<ConsentManager> requestingConsent(@Valid @RequestBody ConsentManager consentManager){
        System.out.println(consentManager.getDiseaseName());
        return new ResponseEntity<ConsentManager>(consentManagerService.requestConsent(consentManager), HttpStatus.CREATED);
    }

    
    
}
