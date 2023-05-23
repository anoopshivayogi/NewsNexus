import {Search2Icon} from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon
} from "@chakra-ui/react";
import React, {ReactElement, ReactNode, useEffect} from "react";
import {useState} from 'react';

import api from "../api/axiosConfig";

function groupObjectsByCategory(objects) {
  const result = {};

  objects.forEach((obj) => {
    const {category, ...restData} = obj;

    if (!result[category]) {
      result[category] = [];
    }

    result[category].push(restData);
  });

  return result;
}

export const SearchBar = ({setData}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => { setSearchQuery(event.target.value); };

  const handleSearch = async () => {
    try {
      const response = await api.get(`/api/v1/news/search/${searchQuery}`);
      console.log(response.data);
      const newsData = groupObjectsByCategory(response.data);
      setData(newsData);
      console.log(newsData);

    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => { handleSearch(); }, [ searchQuery ]);

  return (
    <>
      <InputGroup borderRadius={5} size="md" width={600}>
        <InputLeftElement
  pointerEvents = "none"
  children =
  {
    <Search2Icon color="gray.600" />
  } />
        <Input value={searchQuery} onChange={handleInputChange} type="text" placeholder="Search News Articles" border="1px solid #949494" / >
      < InputRightAddon
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
