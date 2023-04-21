package com.patient.patient_app.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.patient.patient_app.entity.RecordMapping;
import com.patient.patient_app.service.RecordService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/records")
public class RecordController {

    @Autowired
    RecordService recordService;

    private RestTemplate restTemplate = new RestTemplate();

    @PostMapping("/meta-data")
    public ResponseEntity<RecordMapping> addMetaData(@RequestBody RecordMapping recordMapping) {

        return new ResponseEntity<>(recordService.addData(recordMapping), HttpStatus.CREATED);

    }

    @GetMapping("/medical-records/{patientAadhar}")
    public List<Map<String, Object>> getMedicalRecords(@PathVariable String patientAadhar)
            throws JsonProcessingException, JsonMappingException {
        String apiUrl = "http://localhost:9099/hospital/record-mapping/" + patientAadhar;
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(apiUrl, String.class);
        String responseJson = responseEntity.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        List<Map<String, Object>> medicalRecords = objectMapper.readValue(responseJson,
                new TypeReference<List<Map<String, Object>>>() {
                });
        return medicalRecords;
    }

}
