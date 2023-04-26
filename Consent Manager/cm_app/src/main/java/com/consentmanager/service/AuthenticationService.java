package com.consentmanager.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.consentmanager.entity.Role;
import com.consentmanager.entity.Users;
import com.consentmanager.repository.UsersDummyRepository;

import com.consentmanager.response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UsersDummyRepository usersRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(Users request){

        var users = Users.builder()
        .Id((request.getId()))
        .username((request.getUsername()))
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.PATIENT)
        .build();

        usersRepository.save(users);
        var jwtToken = jwtService.generateToken(users);

        return AuthenticationResponse.builder().token(jwtToken).build();

    }

}
