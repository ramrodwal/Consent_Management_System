package com.patient.patient_app.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
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

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/consent")
public class ConsentController {

    @Value("${CM_TOKEN}")
    private String token;

    private RestTemplate restTemplate = new RestTemplate();

    // @GetMapping("/view-consent/{patientAadhar}")
    // public List<Map<String, Object>> getConsents(@PathVariable String
    // patientAadhar)
    // throws JsonMappingException, JsonProcessingException {

    // String apiUrl = "http://localhost:9092/patient/view-consent/" +
    // patientAadhar;
    // ResponseEntity<String> responseEntity = restTemplate.getForEntity(apiUrl,
    // String.class);
    // String responseJson = responseEntity.getBody();
    // ObjectMapper objectMapper = new ObjectMapper();
    // List<Map<String, Object>> consents = objectMapper.readValue(responseJson,
    // new TypeReference<List<Map<String, Object>>>() {
    // });
    // return consents;

    // }

    @GetMapping("/view-consent/{patientAadhar}")
    public List<Map<String, Object>> getConsents(@PathVariable String patientAadhar)
            throws JsonMappingException, JsonProcessingException {

        String apiUrl = "http://localhost:9092/patient/view-consent/" + patientAadhar;
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(apiUrl, HttpMethod.GET, entity, String.class);
        String responseJson = responseEntity.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        List<Map<String, Object>> consents = objectMapper.readValue(responseJson,
                new TypeReference<List<Map<String, Object>>>() {
                });
        return consents;

    }

    // @PostMapping("/update-status/{consentId}")
    // public ResponseEntity<Object> updateStatus(@RequestBody Object
    // consentManager, @PathVariable Integer consentId)
    // throws JsonProcessingException {
    // String apiUrl =
    // "http://localhost:9092/patient/login/consentManager/responseConsent/" +
    // consentId;
    // ResponseEntity<String> responseEntity = restTemplate.postForEntity(apiUrl,
    // consentManager, String.class);
    // String responseJson = responseEntity.getBody();
    // ObjectMapper objectMapper = new ObjectMapper();
    // Map<String, Object> response = objectMapper.readValue(responseJson, new
    // TypeReference<Map<String, Object>>() {
    // });
    // return new ResponseEntity<>(response, HttpStatus.OK);
    // }

    @PostMapping("/update-status/{consentId}")
    public ResponseEntity<Object> updateStatus(@RequestBody Object consentManager, @PathVariable Integer consentId)
            throws JsonProcessingException {
        String apiUrl = "http://localhost:9092/patient/login/consentManager/responseConsent/" + consentId;
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);
        HttpEntity<Object> entity = new HttpEntity<>(consentManager, headers);
        ResponseEntity<String> responseEntity = restTemplate.exchange(apiUrl, HttpMethod.POST, entity, String.class);
        String responseJson = responseEntity.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        Map<String, Object> response = objectMapper.readValue(responseJson, new TypeReference<Map<String, Object>>() {
        });
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // @PostMapping("/approved-records")
    // public ResponseEntity<Boolean> sendApprovedRecords(@RequestBody List<Object> consentManager)
    //         throws JsonProcessingException {
    //     String apiUrl = "http://localhost:9092/hospital/consent/approve-records";
    //     restTemplate.postForEntity(apiUrl, consentManager, String.class);

    //     return new ResponseEntity<>(true, HttpStatus.OK);
    // }


    @PostMapping("/approved-records")
public ResponseEntity<Boolean> sendApprovedRecords(@RequestBody List<Object> consentManager)
        throws JsonProcessingException {
    String apiUrl = "http://localhost:9092/hospital/consent/approve-records";
    HttpHeaders headers = new HttpHeaders();
    headers.set("Authorization", "Bearer " + token);
    HttpEntity<List<Object>> requestEntity = new HttpEntity<>(consentManager, headers);
    restTemplate.exchange(apiUrl, HttpMethod.POST, requestEntity, String.class);

    return new ResponseEntity<>(true, HttpStatus.OK);
}


}
