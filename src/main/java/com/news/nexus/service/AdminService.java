package com.news.nexus.service;

import com.news.nexus.model.Admin;
import com.news.nexus.repository.AdminRespository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
  @Autowired private AdminRespository adminRespository;

  public List<Admin> allNews() { return adminRespository.findAll(); }
}
