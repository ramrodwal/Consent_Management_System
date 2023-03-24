package com.hospital.hospital_app.service;

import java.util.List;

import com.hospital.hospital_app.entity.Admin;
import com.hospital.hospital_app.repository.HospitalRepository;

public class HospitalService {

    HospitalRepository hospitalRepository=new HospitalRepository();
    public int checkAdminCred(Admin admin){

        int status=0;
        List<String> username1;
        String username2;
        String pass1;
        String pass2;

        username2=hospitalRepository.getAdminUsername(admin);
        username1=hospitalRepository.getAdminUsername();
        pass1=hospitalRepository.getAdminPassword(admin);
        

        for(String u:username1){
            if(u==username2){
                status++;
                break;
            }
        }
        if(status==1){
            pass2=hospitalRepository.getAdminPassword(username2);
            if(pass2==pass1){
                status++;
                return status;
            }
        }
        return -1;
    }
}
