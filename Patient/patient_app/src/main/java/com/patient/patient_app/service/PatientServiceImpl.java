package com.patient.patient_app.service;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.patient.patient_app.entity.Patient;
import com.patient.patient_app.exception.EntityNotFoundException;
import com.patient.patient_app.repository.PatientsRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PatientServiceImpl implements PatientService{

    private PatientsRepository patientsRepository;

    @Override
    public Patient registerPatient(Patient patient) {
        
        return patientsRepository.save(patient);

    }

    @Override
    public Patient getPatient(String patient_aadhar) {
        Optional<Patient> patient = patientsRepository.findById(patient_aadhar);
        return unwrapPatient(patient, patient_aadhar);

    }

    static Patient unwrapPatient(Optional<Patient> entity, String patient_aadhar) {
        if (entity.isPresent()) return entity.get();
        else throw new EntityNotFoundException(patient_aadhar, Patient.class);
    }

    @Override
    public Patient updateProfile(Patient updatedPatient) {

        Optional<Patient> patientOptional = patientsRepository.findById(updatedPatient.getPatient_aadhar());
        if (!patientOptional.isPresent()) {
            return null;
        }

        Patient existingPatient = patientOptional.get();
        BeanUtils.copyProperties(updatedPatient, existingPatient, "patient_aadhar");
        return patientsRepository.save(existingPatient);
    }
    
}
