package com.hospital.hospital_app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.hospital_app.entity.Admin;
import com.hospital.hospital_app.entity.MedicalPractitioner;


public interface AdminRepository extends JpaRepository<Admin, Integer> {

    Admin findByEmail(String email);
    
}
