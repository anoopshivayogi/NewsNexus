package com.news.nexus.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "news")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class News {
    @Id
    private ObjectId id;
    private String title;
    private String link;
    private List<String> keywords;
    private List<String> creator;
    private String description;
    private String content;
    private String pubDate;
    private String full_description;
    private String source_id;
    private List<String> country;
    private String category;
    private String language;
}
