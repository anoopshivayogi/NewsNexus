package com.news.nexus.service;

import com.news.nexus.Repository.ReviewRepository;
import com.news.nexus.model.Movie;
import com.news.nexus.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;
    public Review createReview(String reviewBody, String imdbId){
        Review review = reviewRepository.insert((new Review(reviewBody)));

        mongoTemplate.update(Movie.class).
                matching(Criteria.where("imdbId").
                        is(imdbId)).apply(new Update().
                        push("reviewIds").value(review)).first();
        return review;
    }


}
