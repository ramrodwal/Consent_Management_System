package com.had.consentmanagement;

import java.util.*;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class Controller {

    List<Patient> patientList = new ArrayList<>();
     
    @PostMapping("/patients")
    public ResponseEntity<Patient> addPatient(@RequestBody Patient patient) {
        patientList.add(patient);
        System.out.println(patient.getFname());
        return new ResponseEntity<>(patient, HttpStatus.CREATED);
    }
    
    @GetMapping("/patient")
    public List<Patient> getAllPatients() {
        return patientList;
    }
}