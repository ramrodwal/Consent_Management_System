package com.hospital.hospital_app.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.hospital_app.entity.CentralHospital;
import com.hospital.hospital_app.entity.MedicalPractitioner;
import com.hospital.hospital_app.entity.PatientList;
import com.hospital.hospital_app.service.HospitalService;
import com.hospital.hospital_app.service.PractitionerService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/book-appointment")
@RequiredArgsConstructor
public class BookAppointment {

    @Autowired
    private HospitalService hospitalService;

    @Autowired
    private PractitionerService practitionerService;


    @PostMapping("/add-patient")
    public ResponseEntity<PatientList> addPatientToHospital(@RequestBody PatientList patientList) {

        return new ResponseEntity<>(hospitalService.addPatient(patientList), HttpStatus.CREATED);

    }

    // retreving all the hospitals details
    @GetMapping("/hospital-list")
    public List<CentralHospital> getAllHospitals() {
        return hospitalService.getAllDetails();
    }

    @GetMapping("/practitioner-list/{hospitalId}")
    public List<MedicalPractitioner> getMedicalPractitionerByHospital(@PathVariable Integer hospitalId){

        return practitionerService.getMedicalPractitionerByHospital(hospitalId);

    }

}
