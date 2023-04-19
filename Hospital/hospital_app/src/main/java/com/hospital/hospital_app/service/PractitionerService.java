package com.hospital.hospital_app.service;

import java.util.List;

import com.hospital.hospital_app.entity.MedicalPractitioner;

public interface PractitionerService {
    MedicalPractitioner registerPractitioner(MedicalPractitioner medicalPractitioner);
    List<MedicalPractitioner> getAllDetails();
    List<MedicalPractitioner> getMedicalPractitionerByHospital(Integer hospitalId);

}
