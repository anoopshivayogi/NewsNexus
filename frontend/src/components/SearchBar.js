import React, { ReactElement, ReactNode, useEffect } from "react";
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

function groupObjectsByCategory(objects, categories, sources) {
  
  const result = {};

  objects.forEach((obj) => {
    const { category, source_id, ...restData } = obj;
  
    if((categories[category] === true && sources[source_id] == true)){

    if (!result[category]) {
      result[category] = [];
    }
    const dataWithSourceId = { ...restData, source_id };
    result[category].push(dataWithSourceId);
  }
});

  return result;
}

export const SearchBar = ({setData, categories, sources}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await api.get(`/api/v1/news/search/${searchQuery}`);
      console.log(response.data);
      const newsData = groupObjectsByCategory(response.data, categories, sources);
      setData(newsData);
      console.log(newsData);

    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(()=>{
    handleSearch();
  }, [searchQuery, categories, sources]);


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
