package com.patient.patient_app.web;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/consent")
public class ConsentController {

    private RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/view-consent/{patientAadhar}")
    public List<Map<String, Object>> getConsents(@PathVariable String patientAadhar) throws JsonMappingException, JsonProcessingException{

        String apiUrl = "http://localhost:9092/patient/view-consent/" + patientAadhar;
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(apiUrl, String.class);
        String responseJson = responseEntity.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        List<Map<String, Object>> consents = objectMapper.readValue(responseJson,
                new TypeReference<List<Map<String, Object>>>() {
                });
        return consents;


    }

    

}
