package com.news.nexus.repository;

import com.news.nexus.model.News;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewsRepository extends MongoRepository<News, ObjectId> {

       public List<News> findNewsByCategory(String category);
       // ?0 represents first argument to the method
       @Query(value = "{ 'source_id' : ?0 }")
       public List<News> findNewsBySource_id(String source_id);
       public List<News> findNewsByCategoryOrderByPubDate(String category);

}
