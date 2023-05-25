import { ReactNode } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { SearchBar } from './SearchBar';

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );



export default function Nav({isDashboard, setData}) {
  const navigate = useNavigate();
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  const handleClick = (path) => {
    navigate(`/${path}`); 
  };

  
  const requestNotificationPermission = async () => {
    // send notification only if the URL is dashboard
    if(isDashboard){
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
    else if ('Notification' in window && Notification.permission === 'granted') {
      let notification = new Notification("Lucknow Gets Own IPL Team: All You Need To Know About Sanjiv Goenka's Lucknow IPL Team", {
        body: 'Sanjiv Goenka, owner of RPSG Group won the bid for new IPL Franchise and it will have new team of Lucknow IPL in Uttar Pradesh',
        icon: '../resources/news.png'
      });
      notification.onclick = function() {
        window.open('https://www.sentinelassam.com/sports-news/lucknow-gets-own-ipl-team-all-you-need-to-know-about-sanjiv-goenkas-lucknow-ipl-team-560551');
       };
    }
    else if ('Notification' in window && Notification.permission !== 'granted') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notification permission granted!');
      }
    }
  }
  };
  

  const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>News Nexus</Box>

          {isDashboard && <SearchBar setData={setData} />}

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem onClick={() => handleClick("dashboard")}>Dashboard</MenuItem>
                  <MenuItem onClick={() => handleClick("admin")}>Admin</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}