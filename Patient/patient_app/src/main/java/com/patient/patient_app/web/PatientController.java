package com.patient.patient_app.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.patient.patient_app.entity.Patient;
import com.patient.patient_app.service.PatientService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/patient")
@Component
public class PatientController {

    @Autowired
    PatientService patientService;

    @PostMapping("/register")
    public ResponseEntity<Patient> savePatient(@RequestBody Patient patient){
        
        return new ResponseEntity<>(patientService.savPatient(patient),HttpStatus.CREATED);
    }

    
}
