package com.news.nexus.controller;

import com.news.nexus.model.News;
import com.news.nexus.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/news")
public class NewsController {
    @Autowired
    private NewsService newsService;

    @GetMapping
    public ResponseEntity<List<News>> getAllNews(){
        return new ResponseEntity<>(newsService.allNews(), HttpStatus.OK);
    }

    @GetMapping("/source/{sourceId}")
    public ResponseEntity<List<News>> newsBySource_id(@PathVariable String sourceId){
        return new ResponseEntity<>(newsService.newsBySource_id(sourceId), HttpStatus.OK);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<News>> getNewsByCategoryOrderByPubDate(@PathVariable String category){
        return new ResponseEntity<>(newsService.newsByCategoryOrderByPubDate(category), HttpStatus.OK);
    }


}
