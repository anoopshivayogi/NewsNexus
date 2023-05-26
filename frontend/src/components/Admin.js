import { Flex, Heading, Select, Switch, Divider} from "@chakra-ui/react";
import { useState } from "react";
import api from '../api/axiosConfig';

const Admin = ({ categories, sources, setCategories, setSources }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSource, setSelectedSource] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSourceChange = (event) => {
    setSelectedSource(event.target.value);
  };

  const handleOptionToggle = async (option) => {
    if (option === 'categoryOption') {
      const updatedCategories = { ...categories };
      updatedCategories[selectedCategory] = !updatedCategories[selectedCategory];
      try {
        await api.post('/api/v1/admin/updateCategories', updatedCategories );
        setCategories(updatedCategories);
        console.log(updatedCategories);
      } catch (error) {
        console.log(error);
      }
    } else if (option === 'sourceOption') {
      const updatedSources = { ...sources };
      updatedSources[selectedSource] = !updatedSources[selectedSource];
      try {
        await api.post('/api/v1/admin/updateSources',  updatedSources );
        setSources(updatedSources);
        console.log(updatedSources);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Flex direction="row" justify="space-around">
      <Flex direction="column" align="center">
        <Heading>Categories</Heading>
        <Select
          size="md"
          variant="outline"
          m={10}
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {Object.keys(categories).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
        {selectedCategory && (
          <Switch
            isChecked={categories[selectedCategory]}
            onChange={() => handleOptionToggle('categoryOption')}
            size="md"
            colorScheme="teal"
          />
        )}
      </Flex>
      <Divider orientation="vertical" h={800} mx={4} />
      <Flex direction="column" align="center">
        <Heading>Sources</Heading>
        <Select
          size="md"
          variant="outline"
          m={10}
          value={selectedSource}
          onChange={handleSourceChange}
        >
          {Object.keys(sources).map((source) => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </Select>
        {selectedSource && (
          <Switch
            isChecked={sources[selectedSource]}
            onChange={() => handleOptionToggle('sourceOption')}
            size="md"
            colorScheme="teal"
          />
        )}
      </Flex>
    </Flex>
  );
};






export default Admin;