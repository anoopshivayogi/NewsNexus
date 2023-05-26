package com.news.nexus.service;

import com.news.nexus.model.News;
import com.news.nexus.repository.NewsRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Service
public class NewsService {
  @Autowired private NewsRepository newsRepository;

  public List<News> allNews() { return newsRepository.findAll(); }

  public List<News> newsByCategory(String category) {
    return newsRepository.findNewsByCategory(category);
  }
  //
  public List<News> newsBySource_id(String source_id) {
    return newsRepository.findNewsBySource_id(source_id);
  }

  public List<News> newsByCategoryOrderByPubDate(String category) {
    return newsRepository.findNewsByCategoryOrderByPubDate(category);
  }

  public List<News> newsByTitleContainingIgnoreCase(String keyword) {
    if (StringUtils.isEmpty(keyword)) {
      // Handle empty search query, such as returning all news
      return newsRepository.findAll();
    } else {
      // Perform the actual search using GetNewsByTitleContainingIgnoreCase
      // query
      return newsRepository.findNewsByTitleContainingIgnoreCase(keyword);
    }
  }

  public List<String> allCategories() {
    List<News> allNews = newsRepository.findAll();
    List<String> categories = allNews.stream()
                                  .map(News::getCategory)
                                  .distinct()
                                  .collect(Collectors.toList());
    return categories;
  }

  public List<String> allSources() {
    List<News> allNews = newsRepository.findAll();
    List<String> sources = allNews.stream()
                               .map(News::getSource_id)
                               .distinct()
                               .collect(Collectors.toList());
    return sources;
  }
}
