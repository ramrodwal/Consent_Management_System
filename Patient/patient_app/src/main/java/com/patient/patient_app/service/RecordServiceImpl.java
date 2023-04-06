package com.patient.patient_app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.patient.patient_app.entity.RecordMapping;
import com.patient.patient_app.repository.RecordMetaDataRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class RecordServiceImpl implements RecordService{

    private RecordMetaDataRepository recordMetaDataRepository;


    @Override
    public RecordMapping addData(RecordMapping recordMapping){
        return recordMetaDataRepository.save(recordMapping);
    }


    
}
