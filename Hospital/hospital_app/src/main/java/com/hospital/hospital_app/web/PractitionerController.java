package com.hospital.hospital_app.web;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.hospital_app.entity.CentralHospital;
import com.hospital.hospital_app.entity.MedicalPractitioner;
import com.hospital.hospital_app.repository.HospitalRepository;
import com.hospital.hospital_app.service.PractitionerService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
//@CrossOrigin(origins = "*")
@RequestMapping("/hospital")
@AllArgsConstructor
@NoArgsConstructor
public class PractitionerController {

    @Autowired
    private  PasswordEncoder passwordEncoder;

    @Autowired
    PractitionerService practitionerService;

    @Autowired
    HospitalRepository hospitalRepository;
    
    //practitioner registration
    @PostMapping("/admin-login/signup")
    public ResponseEntity<MedicalPractitioner> hospitalRegistration( @Valid @RequestBody MedicalPractitioner medicalPractitioner){
        System.out.println(medicalPractitioner.getGender());
        medicalPractitioner.setPassword(passwordEncoder.encode(medicalPractitioner.getPassword()));
        return new ResponseEntity<MedicalPractitioner>(practitionerService.registerPractitioner(medicalPractitioner), HttpStatus.CREATED);
    }

    //retreving all the practitioners details
    @GetMapping("/admin-login/practitioner-list")
    public List<MedicalPractitioner> getAllPractitioners(){
        return practitionerService.getAllDetails();
    }

    @GetMapping("/practitioner-login/get-hospital/{hospitalId}")
    public ResponseEntity<String> getHospitalNameById(@PathVariable int hospitalId){
        Optional<CentralHospital> hospital=hospitalRepository.findById(hospitalId);
        System.out.println(hospital.get().getHospitalName());
        return ResponseEntity.ok(hospital.get().getHospitalName());
    }
}
