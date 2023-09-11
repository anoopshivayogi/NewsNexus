import { Button, Container, Box, Heading, Text } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();

  const containerStyle = {
    // backgroundColor: "#3498db", // Set your desired background color
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  };

  const headingStyle = {
    color: "black", // Change the text color to white
  };

  return (
    <Box style={containerStyle}>
      <Container maxW="xl" centerContent>
        <Box p="6" boxShadow="md" borderRadius="md" bg="rgba(255, 255, 255, 0.8)">
          <Heading as="h1" size="xl" mb="4" style={headingStyle}>
            Welcome to NewsNexus
          </Heading>
          <Text mb="8" style={headingStyle}>
  Experience the world of news like never before with NewsNexus, the ultimate destination for up-to-the-minute updates and analysis from around the globe.
  <br /><br />
  <strong>Key Features:</strong>
  <br /><br />
  <ul>
    <li>Secure OAuth user authentication</li>
    <li>Automated news aggregation with hourly updates (powered by Beautiful Soup)</li>
    <li>Efficient content categorization</li>
    <li>Personalized user dashboard</li>
    <li>Robust search functionality</li>
    <li>Instant notifications for breaking news</li>
    <li>Intuitive admin panel for easy content management by category and source</li>
  </ul>
</Text>



          <Button colorScheme="blue" onClick={loginWithRedirect}>
            Login / Sign up
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;
