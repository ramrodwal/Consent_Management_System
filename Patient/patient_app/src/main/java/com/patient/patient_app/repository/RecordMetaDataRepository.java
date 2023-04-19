package com.patient.patient_app.repository;

import org.springframework.data.repository.CrudRepository;

import com.patient.patient_app.entity.RecordMapping;

public interface RecordMetaDataRepository extends CrudRepository<RecordMapping, Integer> {

}
