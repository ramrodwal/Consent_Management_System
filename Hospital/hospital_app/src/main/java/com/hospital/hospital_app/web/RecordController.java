package com.hospital.hospital_app.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
import com.hospital.hospital_app.entity.MedicalRecords;
import com.hospital.hospital_app.service.MedicalrecordsService;

import jakarta.validation.Valid;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/hospital")
public class RecordController {

    @Value("${CM_TOKEN}")
    private String token;


    private RestTemplate restTemplate = new RestTemplate();

    @Autowired
    MedicalrecordsService medicalrecordsService;

    @PostMapping("/practitioner-login/add-record")
    public ResponseEntity<MedicalRecords> addingRecords(@Valid @RequestBody MedicalRecords medicalRecords) {
        return new ResponseEntity<MedicalRecords>(medicalrecordsService.addMedicalRecords(medicalRecords),
                HttpStatus.CREATED);
    }

    @GetMapping("/record-mapping/{patientAadhar}")
    public List<MedicalRecords> getEntitiesByName(@PathVariable String patientAadhar) {
        return medicalrecordsService.getEntitiesByName(patientAadhar);
    }

    @PostMapping("/add-metaData-patientSide")
public ResponseEntity<Boolean> addMetaDataToPatientSide(@RequestBody Object metaData) {

    String apiUrl = "http://localhost:8765/records/meta-data";
    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_JSON);
    HttpEntity<Object> request = new HttpEntity<>(metaData, headers);
    restTemplate.postForEntity(apiUrl, request, String.class);
    return new ResponseEntity<>(true, HttpStatus.OK);

}

// @GetMapping("/view-approvedRecords/{consentId}")
//     public List<Map<String, Object>> getConsents(@PathVariable Integer consentId)
//             throws JsonMappingException, JsonProcessingException {

//         String apiUrl = "http://localhost:9092/hospital/approved-records/" + consentId;
//         ResponseEntity<String> responseEntity = restTemplate.getForEntity(apiUrl, String.class);
//         String responseJson = responseEntity.getBody();
//         ObjectMapper objectMapper = new ObjectMapper();
//         List<Map<String, Object>> consents = objectMapper.readValue(responseJson,
//                 new TypeReference<List<Map<String, Object>>>() {
//                 });
//         return consents;

//     }


@GetMapping("/view-approvedRecords/{consentId}")
public List<Map<String, Object>> getApprovedRecords(@PathVariable Integer consentId)
        throws JsonMappingException, JsonProcessingException {

    String apiUrl = "http://localhost:9092/hospital/approved-records/" + consentId;
    HttpHeaders headers = new HttpHeaders();
    headers.set("Authorization", "Bearer " + token); // Replace with your actual token value
    HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
    ResponseEntity<String> responseEntity = restTemplate.exchange(apiUrl, HttpMethod.GET, entity, String.class);
    String responseJson = responseEntity.getBody();
    ObjectMapper objectMapper = new ObjectMapper();
    List<Map<String, Object>> approvedRecords = objectMapper.readValue(responseJson,
            new TypeReference<List<Map<String, Object>>>() {
            });
    return approvedRecords;
}



}
