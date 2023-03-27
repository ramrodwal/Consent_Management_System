package com.hospital.hospital_app.service;

import org.springframework.stereotype.Service;

import com.hospital.hospital_app.entity.MedicalPractitioner;
import com.hospital.hospital_app.repository.PractitionerRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PractitionerServiceImpl implements PractitionerService{
    
    private PractitionerRepository practitionerRepository;
    @Override
    public MedicalPractitioner registerPractitioner(MedicalPractitioner medicalPractitioner){
        return practitionerRepository.save(medicalPractitioner);
    }
}
