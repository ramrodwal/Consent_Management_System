package com.hospital.hospital_app.service;

import org.springframework.stereotype.Service;

import com.hospital.hospital_app.entity.MedicalPractitioner;
import com.hospital.hospital_app.repository.PractitionerRepository;
import java.util.List;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PractitionerServiceImpl implements PractitionerService{
    
    private PractitionerRepository practitionerRepository;

    //method to sav practitiones details
    @Override
    public MedicalPractitioner registerPractitioner(MedicalPractitioner medicalPractitioner){
        return practitionerRepository.save(medicalPractitioner);
    }

    //method to retrive all practitioners details
    @Override
    public List<MedicalPractitioner> getAllDetails(){
        return (List<MedicalPractitioner>) practitionerRepository.findAll();
    }
}
