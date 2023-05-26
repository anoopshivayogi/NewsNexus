package com.news.nexus.repository;

import com.news.nexus.model.Admin;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends MongoRepository<Admin, ObjectId> {

    Admin findFirstBy();

}
