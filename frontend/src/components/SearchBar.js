import React, { ReactElement, ReactNode } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import api from "../api/axiosConfig";
import { useState } from 'react';

function groupObjectsByCategory(objects) {
  const result = {};

  objects.forEach((obj) => {
    const { category, ...restData } = obj;

    if (!result[category]) {
      result[category] = [];
    }

    result[category].push(restData);
  });

  return result;
}

export const SearchBar = ({setData}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    handleSearch();
  };

  const handleSearch = async () => {
    try {
      let url;
      if(Object.keys(searchQuery).length == 0){
        url = "/api/v1/news";
      }else{
        url = `/api/v1/news/search/${searchQuery}`;
      }
      console.log(url);
      const response = await api.get(url);
      console.log(response.data);
      const newsData = groupObjectsByCategory(response.data);
      setData(newsData);
      console.log(newsData);

    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <>
      <InputGroup borderRadius={5} size="md" width={600}>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input value={searchQuery} onChange={handleInputChange} type="text" placeholder="Search News Articles" border="1px solid #949494" />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button onClick={handleSearch} size="md" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};
