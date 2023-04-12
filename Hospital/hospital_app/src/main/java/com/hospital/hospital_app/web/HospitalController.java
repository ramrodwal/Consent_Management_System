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

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/hospital")
public class HospitalController {

    // this is tight coupling (not recommended, makes unit testing impossible), will
    // do loose coupling
    // solution in dependency injection
    @Autowired
    HospitalService hospitalService;

    // admin login authentication check
    @PostMapping("/admin-login")
    public ResponseEntity<Admin> adminLogin(@RequestBody Admin admin) {

        return new ResponseEntity<Admin>(admin, null);
    }

    // hospital registratrion
    @PostMapping("/admin-login/register-hospital")
    public ResponseEntity<CentralHospital> hospitalRegistration(@Valid @RequestBody CentralHospital central_hospital) {
        System.out.println(central_hospital.getHospital_name());
        return new ResponseEntity<CentralHospital>(hospitalService.registerHospital(central_hospital),
                HttpStatus.CREATED);
    }

    // retreving all the hospitals details
    @GetMapping("/admin-login/hospital-list")
    public List<CentralHospital> getAllHospitals() {
        return hospitalService.getAllDetails();
    }

    @PostMapping("/add-patient")
    public ResponseEntity<PatientList> addPatientToHospital(@RequestBody PatientList patientList) {

        return new ResponseEntity<>(hospitalService.addPatient(patientList), HttpStatus.CREATED);

    }

    @GetMapping("/get-patients")
    public List<PatientList> getAllPatients() {
        return hospitalService.getAllPatientsDetails();
    }

    @GetMapping("/getPatientsByPractitionerAadhar/{practitioner_aadhar}")
    public List<PatientList> getPatientsByDoctor(@PathVariable String practitioner_aadhar){
        return hospitalService.getPatientsByPractitionerAadhar(practitioner_aadhar);
    }

}
