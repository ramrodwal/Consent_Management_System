package com.hospital.hospital_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hospital.hospital_app.entity.Admin;


public interface AdminRepository extends JpaRepository<Admin, Integer> {

    Admin findByEmail(String email);
    
}
