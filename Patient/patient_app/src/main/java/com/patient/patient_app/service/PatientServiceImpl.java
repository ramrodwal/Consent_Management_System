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
    public Patient getPatient(String patientAadhar) {
        Optional<Patient> patient = patientsRepository.findById(patientAadhar);
        return unwrapPatient(patient, patientAadhar);

    }

    static Patient unwrapPatient(Optional<Patient> entity, String patientAadhar) {
        if (entity.isPresent()) return entity.get();
        else throw new EntityNotFoundException(patientAadhar, Patient.class);
    }

    @Override
    public Patient updateProfile(Patient updatedPatient) {

        Optional<Patient> patientOptional = patientsRepository.findById(updatedPatient.getPatientAadhar());
        if (!patientOptional.isPresent()) {
            return null;
        }

        Patient existingPatient = patientOptional.get();
        BeanUtils.copyProperties(updatedPatient, existingPatient, "patient_aadhar");
        return patientsRepository.save(existingPatient);
    }
    
}
