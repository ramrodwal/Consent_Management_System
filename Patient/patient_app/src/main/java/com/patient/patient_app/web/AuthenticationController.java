package com.patient.patient_app.web;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.patient.patient_app.entity.Patient;
import com.patient.patient_app.request.AuthenticationRequest;
import com.patient.patient_app.response.AuthenticationResponse;
import com.patient.patient_app.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody Patient request) {

        return ResponseEntity.ok(service.register(request));

    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {

        return ResponseEntity.ok(service.authenticate(request));

    }

}
