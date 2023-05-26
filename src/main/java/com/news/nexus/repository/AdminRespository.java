package com.news.nexus.repository;

import com.news.nexus.model.Admin;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface AdminRespository extends MongoRepository<Admin, ObjectId> {

}
