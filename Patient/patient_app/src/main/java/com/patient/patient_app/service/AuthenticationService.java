package com.patient.patient_app.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.patient.patient_app.entity.Patient;
import com.patient.patient_app.entity.Role;
import com.patient.patient_app.repository.PatientsRepository;
import com.patient.patient_app.request.AuthenticationRequest;
import com.patient.patient_app.response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final PatientsRepository patientsRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(Patient request) {
        var patient = Patient.builder()
                .fname((request.getFname()))
                .mname((request.getMname()))
                .lname((request.getLname()))
                .age((request.getAge()))
                .gender((request.getGender()))
                .contactNo((request.getContactNo()))
                .state((request.getState()))
                .city((request.getCity()))
                .address((request.getAddress()))
                .zipcode((request.getZipcode()))
                .patientAadhar((request.getPatientAadhar()))
                .email((request.getEmail()))
                .password(passwordEncoder.encode(request.getPassword()))
                .confirmPassword(passwordEncoder.encode(request.getPassword()))
                .role(Role.PATIENT)
                .build();

        patientsRepository.save(patient);

        // var jwtToken = jwtService.generateToken(patient);

        return AuthenticationResponse.builder().build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {

        authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        var patient = patientsRepository.findByEmail(request.getEmail())
                .orElseThrow();

        var jwtToken = jwtService.generateToken(patient);

        return AuthenticationResponse.builder().patientAadhar(patient.getPatientAadhar()).token(jwtToken).build();

    }

}
