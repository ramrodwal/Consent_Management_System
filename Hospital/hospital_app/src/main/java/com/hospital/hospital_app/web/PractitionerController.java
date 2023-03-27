package com.hospital.hospital_app.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.hospital_app.entity.MedicalPractitioner;
import com.hospital.hospital_app.service.PractitionerService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/hospital")
public class PractitionerController {

    @Autowired
    PractitionerService practitionerService;
    
    //practitioner registration
    @PostMapping("/admin-login/signup")
    public ResponseEntity<MedicalPractitioner> hospitalRegistration( @Valid @RequestBody MedicalPractitioner medicalPractitioner){
        System.out.println(medicalPractitioner.getGender());
        return new ResponseEntity<MedicalPractitioner>(practitionerService.registerPractitioner(medicalPractitioner), HttpStatus.CREATED);
    }
}
