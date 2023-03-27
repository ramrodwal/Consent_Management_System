package com.hospital.hospital_app.service;

import org.springframework.stereotype.Service;

import com.hospital.hospital_app.entity.CentralHospital;
import com.hospital.hospital_app.repository.HospitalRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class HospitalServiceImpl implements HospitalService {

    private HospitalRepository hospitalRepository;
    @Override
    public CentralHospital registerHospital(CentralHospital centralHospital){
        return hospitalRepository.save(centralHospital);
    }
}
