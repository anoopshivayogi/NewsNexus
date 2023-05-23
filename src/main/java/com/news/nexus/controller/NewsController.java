package com.news.nexus.controller;

import com.news.nexus.model.News;
import com.news.nexus.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/news")
public class NewsController {
    @Autowired
    private NewsService newsService;

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<News>> getAllNews(){
        return new ResponseEntity<>(newsService.allNews(), HttpStatus.OK);
    }

    @GetMapping("/source/{sourceId}")
    @CrossOrigin
    public ResponseEntity<List<News>> newsBySource_id(@PathVariable String sourceId){
        return new ResponseEntity<>(newsService.newsBySource_id(sourceId), HttpStatus.OK);
    }

    @GetMapping("/category/{category}")
    @CrossOrigin
    public ResponseEntity<List<News>> getNewsByCategoryOrderByPubDate(@PathVariable String category){
        return new ResponseEntity<>(newsService.newsByCategoryOrderByPubDate(category), HttpStatus.OK);
    }

    @GetMapping(value = {"/search/{keyword}", "/search/", "/search"})
    @CrossOrigin
    public ResponseEntity<List<News>> GetNewsByTitleContainingIgnoreCase(@PathVariable(required = false) String keyword){
        return new ResponseEntity<>(newsService.NewsByTitleContainingIgnoreCase(keyword), HttpStatus.OK);
    }


}
