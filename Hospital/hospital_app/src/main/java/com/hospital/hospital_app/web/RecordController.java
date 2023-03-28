package com.hospital.hospital_app.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.hospital_app.entity.MedicalRecords;
import com.hospital.hospital_app.service.MedicalrecordsService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/hospital")
public class RecordController {

    @Autowired
    MedicalrecordsService medicalrecordsService;

    @PostMapping("/practitioner-login/add-record")
    public ResponseEntity<MedicalRecords> addingRecords(@Valid @RequestBody MedicalRecords medicalRecords){
        return new ResponseEntity<MedicalRecords>(medicalrecordsService.addMedicalRecords(medicalRecords),HttpStatus.CREATED);
    }
    
}
