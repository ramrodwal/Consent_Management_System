package com.hospital.hospital_app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hospital.hospital_app.entity.CentralHospital;
import com.hospital.hospital_app.entity.PatientList;
import com.hospital.hospital_app.repository.HospitalRepository;
import com.hospital.hospital_app.repository.PatientRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class HospitalServiceImpl implements HospitalService {

    //method to save the hospital details
    private HospitalRepository hospitalRepository;
    private PatientRepository patientRepository;

    @Override
    public CentralHospital registerHospital(CentralHospital centralHospital){
        return hospitalRepository.save(centralHospital);
    }

    //method to retrive all hospitals
    @Override
    public List<CentralHospital> getAllDetails(){
        return (List<CentralHospital>) hospitalRepository.findAll();
    }

    @Override
    public PatientList addPatient(PatientList patientList) {
        return patientRepository.save(patientList);
    }

    @Override
    public List<PatientList> getAllPatientsDetails() {
        return (List<PatientList>) patientRepository.findAll();
    }

    @Override
    public List<PatientList> getPatientsByPractitionerAadhar(String practitionerAadhar) {
        return (List<PatientList>) patientRepository.findByMedicalPractitioner_practitionerAadhar(practitionerAadhar);
    }


}
