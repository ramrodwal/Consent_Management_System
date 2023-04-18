package com.hospital.hospital_app.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hospital.hospital_app.entity.MedicalPractitioner;
import com.hospital.hospital_app.entity.Role;
import com.hospital.hospital_app.repository.PractitionerRepository;
import com.hospital.hospital_app.request.AuthenticationRequest;
import com.hospital.hospital_app.response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PractitionerRepository practitionerRepository;
    
    public AuthenticationResponse register(MedicalPractitioner medicalPractitioner){
        var medicalPractitioner1=MedicalPractitioner.builder()
            .practitionerAadhar(medicalPractitioner.getPractitionerAadhar())
            .fname(medicalPractitioner.getFname())
            .mname(medicalPractitioner.getMname())
            .lname(medicalPractitioner.getLname())
            .age(medicalPractitioner.getAge())
            .gender(medicalPractitioner.getGender())
            .email(medicalPractitioner.getEmail())
            .username(medicalPractitioner.getUsername())
            .number(medicalPractitioner.getNumber())
            .state(medicalPractitioner.getState())
            .city(medicalPractitioner.getCity())
            .address(medicalPractitioner.getAddress())
            .zipcode(medicalPractitioner.getZipcode())
            .medicalLicenseId(medicalPractitioner.getMedicalLicenseId())
            .specialisation(medicalPractitioner.getSpecialisation())
            .qualification(medicalPractitioner.getQualification())
            .password(passwordEncoder.encode(medicalPractitioner.getPassword()))
            .confirmPassword(medicalPractitioner.getConfirmPassword())
            .centralHospital(medicalPractitioner.getCentralHospital())
            .role(Role.PRACTITIONER)
            .build();

        practitionerRepository.save(medicalPractitioner1);

        return AuthenticationResponse.builder().build();


    }

    public AuthenticationResponse authenticate(AuthenticationRequest request){

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        var medicalPractitioner2=practitionerRepository.findByEmail(request.getEmail())
            .orElseThrow();

        var jwtToken=jwtService.generateToken(medicalPractitioner2);

        return AuthenticationResponse.builder().practitionerAadhar(medicalPractitioner2.getPractitionerAadhar()).token(jwtToken).build();


    }

}
