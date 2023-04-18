package com.hospital.hospital_app.web;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.hospital_app.entity.Admin;
import com.hospital.hospital_app.entity.MedicalPractitioner;
import com.hospital.hospital_app.request.AdminAuthenticationRequest;
import com.hospital.hospital_app.request.AuthenticationRequest;
import com.hospital.hospital_app.response.AdminAuthenticationResponse;
import com.hospital.hospital_app.response.AuthenticationResponse;
import com.hospital.hospital_app.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody MedicalPractitioner medicalPractitioner){
        return ResponseEntity.ok(authenticationService.register(medicalPractitioner));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest authenticationRequest){
        return ResponseEntity.ok(authenticationService.authenticate(authenticationRequest));
    }

    @PostMapping("/admin/register")
    public ResponseEntity<AdminAuthenticationResponse> registerAdmin(@RequestBody Admin admin){
        return ResponseEntity.ok(authenticationService.registerAdmin(admin));
    }

    @PostMapping("/admin/authenticate")
    public ResponseEntity<AdminAuthenticationResponse> authenticateAdmin(@RequestBody AdminAuthenticationRequest admin){
        return ResponseEntity.ok(authenticationService.authenticateAdmin(admin));
    }
}
