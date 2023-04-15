package com.hospital.hospital_app.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.hospital_app.entity.Admin;
import com.hospital.hospital_app.entity.CentralHospital;
import com.hospital.hospital_app.entity.PatientList;
import com.hospital.hospital_app.service.HospitalService;
import com.hospital.hospital_app.service.PatientListService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/hospital")
public class PatientListController {

    // this is tight coupling (not recommended, makes unit testing impossible), will
    // do loose coupling
    // solution in dependency injection
    @Autowired
    PatientListService patientList;


    @GetMapping("/getPatientsByPractitionerAadhar/{practitionerAadhar}")
    public List<PatientList> getPatientsByDoctor(@PathVariable String practitionerAadhar){
        return patientList.getPatientsByPractitionerAadhar(practitionerAadhar);
    }

}