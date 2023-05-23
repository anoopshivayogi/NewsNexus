import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Flex, Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';


// function Categories() {
    // 1. Create the component
   
    

    function DataTabs({ data }) {
      return (
        <Tabs marginTop="25px" marginLeft="20px" size="lg">
          <TabList>
            {Object.keys(data)?.map((tab, index) => (
              <Tab key={index}>{tab}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {Object.keys(data)?.map((tab, index) => (
              <TabPanel key={index} p={4}>
                <Flex flexWrap="wrap" justifyContent="space-between">
                  {data[tab]?.map((item, innerIndex) => (
                    <Card key={innerIndex} maxW='sm' mb={4} flexBasis="45%">
                      <CardBody>
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                          <Heading size='md'>{item.title}</Heading>
                          <Text>{item.description}</Text>
                          <Text color='blue.600' fontSize='2xl'>
                            {item.price}
                          </Text>
                        </Stack>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <ButtonGroup spacing='2'>
                          <Button variant='solid' colorScheme='blue'>
                            Buy now
                          </Button>
                          <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                          </Button>
                        </ButtonGroup>
                      </CardFooter>
                    </Card>
                  ))}
                </Flex>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      );
    }
    
  
export default DataTabs;