package com.news.nexus.controller;

import com.news.nexus.model.Admin;
import com.news.nexus.repository.AdminRepository;
import com.news.nexus.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @Autowired
    private AdminRepository adminRepository;
    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<Admin>> getAllAdmin(){
        return new ResponseEntity<>(adminService.allAdmin(), HttpStatus.OK);
    }
    @CrossOrigin
    @PostMapping("/updateCategories")
    public ResponseEntity<String> updateCategories(@RequestBody Map<String, Boolean> categories) {
        try {
            Admin admin = adminService.findFirst();
            if (admin != null) {
                admin.setCategories(categories);
                adminRepository.save(admin);
                return ResponseEntity.ok("Categories updated successfully");
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Admin record not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update categories");
        }
    }
    @CrossOrigin
    @PostMapping("/updateSources")
    public ResponseEntity<String> updateSources(@RequestBody Map<String, Boolean> sources) {
        try {
            Admin admin = adminService.findFirst();
            if (admin != null) {
                admin.setSources(sources);
                adminRepository.save(admin);
                return ResponseEntity.ok("Sources updated successfully");
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Admin record not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update sources");
        }
    }


}
