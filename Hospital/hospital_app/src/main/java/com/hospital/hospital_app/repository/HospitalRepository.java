package com.hospital.hospital_app.repository;

import java.util.Arrays;
import java.util.List;

import com.hospital.hospital_app.entity.Admin;

public class HospitalRepository {
    
    
    private List<Admin> admin_list=Arrays.asList(
        new Admin("gopalgupta2804@gmail.com","gopal@123"),
        new Admin("rrodwal@gmail.com","ram@123"),
        new Admin("vartikach02@gmail.com","vartika@123"),
        new Admin("totaakr@gmail.com","rahul@123")
    );

   

    public List<String> getAdminUsername(){
        List<String> username=Arrays.asList();
        for(Admin a:admin_list){
            username.add(a.getUsername());
        }
        return username;
    }

    public String getAdminUsername(Admin admin){
        return admin.getUsername();
    }

    public String getAdminPassword(Admin admin){
        return admin.getPassword();
    }
    public String getAdminPassword(String username){
        String password;
        for(Admin a:admin_list){
            if(username==a.getUsername()){
                return a.getPassword();
            }
        }
        password=" ";
        return password;
    }
}
