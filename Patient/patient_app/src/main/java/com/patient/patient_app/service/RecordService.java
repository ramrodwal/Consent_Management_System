package com.patient.patient_app.service;

import org.hibernate.internal.build.AllowPrintStacktrace;
import org.springframework.stereotype.Service;

import com.patient.patient_app.entity.MedicalRecords;
import com.patient.patient_app.entity.RecordMapping;


public interface RecordService {

    RecordMapping addData(MedicalRecords medicalRecords);
    
}
