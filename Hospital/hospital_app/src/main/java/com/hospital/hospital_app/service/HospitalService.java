package com.hospital.hospital_app.service;

import java.util.List;

import com.hospital.hospital_app.entity.CentralHospital;
import com.hospital.hospital_app.entity.PatientList;


public interface HospitalService {

    CentralHospital registerHospital(CentralHospital centralHospital);
    List<CentralHospital> getAllDetails();
    PatientList addPatient(PatientList patientList);
    List<PatientList> getAllPatientsDetails();

}
