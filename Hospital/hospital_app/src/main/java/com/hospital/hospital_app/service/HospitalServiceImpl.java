package com.hospital.hospital_app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hospital.hospital_app.entity.CentralHospital;
import com.hospital.hospital_app.repository.HospitalRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class HospitalServiceImpl implements HospitalService {

    //method to save the hospital details
    private HospitalRepository hospitalRepository;
    @Override
    public CentralHospital registerHospital(CentralHospital centralHospital){
        return hospitalRepository.save(centralHospital);
    }

    //method to retrive all hospitals
    @Override
    public List<CentralHospital> getAllDetails(){
        return (List<CentralHospital>) hospitalRepository.findAll();
    }


}
