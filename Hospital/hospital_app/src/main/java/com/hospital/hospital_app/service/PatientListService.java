package com.hospital.hospital_app.service;

import java.util.List;

import com.hospital.hospital_app.entity.CentralHospital;
import com.hospital.hospital_app.entity.PatientList;


public interface PatientListService {

    List<PatientList> getPatientsByPractitionerAadhar(String practitionerAadhar);

}
