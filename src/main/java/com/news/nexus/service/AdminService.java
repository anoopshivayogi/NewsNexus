package com.news.nexus.service;

import com.news.nexus.model.Admin;
import com.news.nexus.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> allAdmin(){
        return adminRepository.findAll();
    }

    public Admin findFirst(){
        return adminRepository.findFirstBy();
    }

}
