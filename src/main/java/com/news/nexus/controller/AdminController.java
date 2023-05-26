package com.news.nexus.controller;

import com.news.nexus.model.Admin;
import com.news.nexus.service.AdminService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/admin")
public class AdminController {
  @Autowired private AdminService adminService;
  @GetMapping
  @CrossOrigin
  public ResponseEntity<List<Admin>> getAllAdmin() {
    return new ResponseEntity<>(adminService.allNews(), HttpStatus.OK);
  }
}
