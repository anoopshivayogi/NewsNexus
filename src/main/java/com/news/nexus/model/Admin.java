package com.news.nexus.model;

import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "admin")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Admin {
  @Id private ObjectId id;
  private Map<String, Boolean> categories;
  private Map<String, Boolean> sources;
}
