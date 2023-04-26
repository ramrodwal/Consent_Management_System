package com.consentmanager.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.consentmanager.entity.Users;

public interface UsersDummyRepository extends JpaRepository<Users, Integer>{
    Optional<Users> findByUsername(String username);
}
