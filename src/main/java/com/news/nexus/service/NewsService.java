package com.news.nexus.service;

import com.news.nexus.model.News;
import com.news.nexus.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService {
    @Autowired
    private NewsRepository newsRepository;

    public List<News> allNews(){
        return newsRepository.findAll();
    }

    public List<News> newsByCategory(String category){
        return newsRepository.findNewsByCategory(category);
    }
//
    public List<News> newsBySource_id(String source_id){
        return newsRepository.findNewsBySource_id(source_id);
    }

    public List<News> newsByCategoryOrderByPubDate(String category){
        return newsRepository.findNewsByCategoryOrderByPubDate(category);
    }




}
