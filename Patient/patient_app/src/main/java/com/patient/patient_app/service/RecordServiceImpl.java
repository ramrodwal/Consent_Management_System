package com.patient.patient_app.service;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonTypeInfo.Id;
import com.patient.patient_app.entity.MedicalRecords;
import com.patient.patient_app.entity.Patient;
import com.patient.patient_app.entity.RecordMapping;
import com.patient.patient_app.repository.RecordMetaDataRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class RecordServiceImpl implements RecordService{

    private RecordMetaDataRepository recordMetaDataRepository;

    // @Override
    // public RecordMapping addData(MedicalRecords medicalRecords) {
        
    //     int hospital_id = medicalRecords.getHospital_id();
    //     String patient_aadhar = medicalRecords.getPatient_aadhar();
    //     int Id=1;
    //     Patient patient=new Patient(null, "ram", "", "rodwal", 23, "male", "ram@gmail.com", "1234567896", "hello", "hello", "123456", "afdsf", "123456789456", "dfsdf", "fsdffsd", "fsdfs");
    //     patient.setPatient_aadhar(patient_aadhar);

    //     RecordMapping recordMapping = new RecordMapping(Id++, hospital_id, patient);

    //     return recordMetaDataRepository.save(recordMapping);

    // }

    @Override
    public RecordMapping addData(RecordMapping recordMapping){
        return recordMetaDataRepository.save(recordMapping);
    }

    
}
