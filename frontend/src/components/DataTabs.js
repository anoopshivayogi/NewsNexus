import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Flex, Box, Card, CardBody, CardFooter, Image, Stack, Heading, Text, Link } from '@chakra-ui/react';


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
                  <Flex flexWrap="wrap" justifyContent="flex-start">
                    {data[tab]?.map((item, innerIndex) => (
                    <Link href={item.link} isExternal>
                      <Card key={innerIndex} maxW='md' mb={4} margin={3}>
                        <CardBody>
                          <Image
                            src={item.link}
                            alt={item.title}
                            borderRadius='lg'
                          />
                          <Stack mt='6' spacing='3'>
                            <Heading size='md'>{item.title}</Heading>
                            <Box height="100px" overflow="hidden">
                            <Text>{item.description}</Text>
                            </Box>
                          </Stack>
                        </CardBody>
                        {/* <Divider /> */}
                        {/* <CardFooter>
                          <ButtonGroup spacing='2'>
                            <Button variant='ghost' colorScheme='blue'>
                              Visit
                            </Button>
                          </ButtonGroup>
                        </CardFooter> */}
                      </Card>
                    </Link>
                    ))}
                  </Flex>
                </TabPanel>

            ))}
          </TabPanels>
        </Tabs>
      );
    }
    
  
export default DataTabs;