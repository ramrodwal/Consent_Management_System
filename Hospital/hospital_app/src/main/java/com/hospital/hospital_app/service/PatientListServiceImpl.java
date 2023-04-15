package com.hospital.hospital_app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hospital.hospital_app.entity.CentralHospital;
import com.hospital.hospital_app.entity.PatientList;
import com.hospital.hospital_app.repository.HospitalRepository;
import com.hospital.hospital_app.repository.PatientListRepository;
import com.hospital.hospital_app.repository.PatientRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PatientListServiceImpl implements PatientListService {

    //method to save the hospital details
    private PatientListRepository patientListRepository;

    @Override
    public List<PatientList> getPatientsByPractitionerAadhar(String practitionerAadhar) {
        return (List<PatientList>) patientListRepository.findByMedicalPractitioner_practitionerAadhar(practitionerAadhar);
    }


}
