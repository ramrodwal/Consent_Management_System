package com.hospital.hospital_app.web;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
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
import com.hospital.hospital_app.entity.CentralHospital;
import com.hospital.hospital_app.entity.MedicalPractitioner;
import com.hospital.hospital_app.repository.HospitalRepository;
import com.hospital.hospital_app.service.PractitionerService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
// @CrossOrigin(origins = "*")
@RequestMapping("/hospital")
@AllArgsConstructor
@NoArgsConstructor
public class PractitionerController {

    @Value("${CM_TOKEN}")
    private String token;

    

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    PractitionerService practitionerService;

    @Autowired
    HospitalRepository hospitalRepository;

    private RestTemplate restTemplate = new RestTemplate();

    // practitioner registration
    @PostMapping("/admin-login/signup")
    public ResponseEntity<MedicalPractitioner> hospitalRegistration(
            @Valid @RequestBody MedicalPractitioner medicalPractitioner) {
        System.out.println(medicalPractitioner.getGender());
        medicalPractitioner.setPassword(passwordEncoder.encode(medicalPractitioner.getPassword()));
        return new ResponseEntity<MedicalPractitioner>(practitionerService.registerPractitioner(medicalPractitioner),
                HttpStatus.CREATED);
    }

    // retreving all the practitioners details
    @GetMapping("/admin-login/practitioner-list")
    public List<MedicalPractitioner> getAllPractitioners() {
        return practitionerService.getAllDetails();
    }

    @GetMapping("/practitioner-login/get-hospital/{hospitalId}")
    public ResponseEntity<String> getHospitalNameById(@PathVariable int hospitalId) {
        Optional<CentralHospital> hospital = hospitalRepository.findById(hospitalId);
        System.out.println(hospital.get().getHospitalName());
        return ResponseEntity.ok(hospital.get().getHospitalName());
    }

    // @PostMapping("/request-consent")
    // public ResponseEntity<Object> requestConsent(@RequestBody Object consent) {

    //     String apiUrl = "http://localhost:9092/hospital/practitioner-login/view-patient/consent"; // Corrected URL to
    //                                                                                               // include protocol
    //                                                                                               // (http)
    //     RestTemplate restTemplate = new RestTemplate(); // Instantiating RestTemplate
    //     HttpHeaders headers = new HttpHeaders(); // Creating HttpHeaders object
    //     headers.setContentType(MediaType.APPLICATION_JSON); // Setting content type to application/json
    //     HttpEntity<Object> requestEntity = new HttpEntity<>(consent, headers); // Creating HttpEntity with consent and
    //                                                                            // headers
    //     ResponseEntity<String> response = restTemplate.postForEntity(apiUrl, requestEntity, String.class); // Making the
    //                                                                                                        // POST
    //                                                                                                        // request

    //     return new ResponseEntity<>(response.getBody(), HttpStatus.OK); // Returning the response body as Object
    // }


    @PostMapping("/request-consent")
    public ResponseEntity<Object> requestConsent(@RequestBody Object consent) {
    
        String apiUrl = "http://localhost:9092/hospital/practitioner-login/view-patient/consent";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + token); // Replace with your actual token value
        HttpEntity<Object> requestEntity = new HttpEntity<>(consent, headers);
        ResponseEntity<String> response = restTemplate.postForEntity(apiUrl, requestEntity, String.class);
    
        return new ResponseEntity<>(response.getBody(), HttpStatus.OK);
    }
    
    

    // @GetMapping("/view-consent/{practitionerAadhar}")
    // public List<Map<String, Object>> getConsents(@PathVariable String practitionerAadhar)
    //         throws JsonMappingException, JsonProcessingException {

    //     String apiUrl = "http://localhost:9092/patient/view-consent/" + practitionerAadhar;
    //     ResponseEntity<String> responseEntity = restTemplate.getForEntity(apiUrl, String.class);
    //     String responseJson = responseEntity.getBody();
    //     ObjectMapper objectMapper = new ObjectMapper();
    //     List<Map<String, Object>> consents = objectMapper.readValue(responseJson,
    //             new TypeReference<List<Map<String, Object>>>() {
    //             });
    //     return consents;

    // }

    @GetMapping("/view-consent/{practitionerAadhar}")
public List<Map<String, Object>> getConsents(@PathVariable String practitionerAadhar)
        throws JsonMappingException, JsonProcessingException {

    String apiUrl = "http://localhost:9092/hospital/practitioner-login/view-consent/" + practitionerAadhar;
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


}
