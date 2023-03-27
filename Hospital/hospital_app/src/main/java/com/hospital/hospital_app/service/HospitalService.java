package com.hospital.hospital_app.service;

import java.util.List;

import com.hospital.hospital_app.entity.CentralHospital;


public interface HospitalService {

    CentralHospital registerHospital(CentralHospital centralHospital);
    List<CentralHospital> getAllDetails();
    
}
