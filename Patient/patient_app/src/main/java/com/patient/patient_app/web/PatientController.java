package com.patient.patient_app.web;

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

import com.patient.patient_app.entity.Patient;
import com.patient.patient_app.service.PatientService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    PatientService patientService;

    @PostMapping("/register")
    public ResponseEntity<Patient> savePatient(@Valid @RequestBody Patient patient){
        System.out.println(patient.getFname());
        return new ResponseEntity<>(patientService.registerPatient(patient), HttpStatus.CREATED);
    }

    @GetMapping("/register/{patient_aadhar}")
    public ResponseEntity<Patient> viewProfile(@PathVariable String patient_aadhar){
        System.out.println(patient_aadhar);
        return new ResponseEntity<>(patientService.getPatient(patient_aadhar), HttpStatus.OK);

    }

    @PutMapping("/update/{patient_aadhar}")
    public ResponseEntity<Patient> updateProfile(@Valid @RequestBody Patient updatedPatient, @PathVariable String patient_aadhar){
        Patient existingPatient = patientService.getPatient(patient_aadhar);
        if(existingPatient == null){
            return ResponseEntity.notFound().build();
        }

        return new ResponseEntity<>(patientService.updateProfile(updatedPatient), HttpStatus.CREATED);

    }

  

    
    
}
