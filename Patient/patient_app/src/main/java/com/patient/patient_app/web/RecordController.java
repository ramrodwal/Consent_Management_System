package com.patient.patient_app.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.patient.patient_app.entity.RecordMapping;
import com.patient.patient_app.service.RecordService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/records")
public class RecordController {

    @Autowired
    RecordService recordService;

    @PostMapping("/meta-data")
    public ResponseEntity<RecordMapping> addMetaData(@RequestBody RecordMapping recordMapping) {

        return new ResponseEntity<>(recordService.addData(recordMapping), HttpStatus.CREATED);

    }

}
