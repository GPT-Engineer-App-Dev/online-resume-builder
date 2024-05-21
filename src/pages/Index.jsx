import { Container, Text, VStack, Box, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Personal Website</Heading>
          <Text fontSize="lg">I'm a web developer passionate about creating beautiful and functional websites.</Text>
        </Box>
        <Box>
          <Image borderRadius="full" boxSize="150px" src="https://via.placeholder.com/150" alt="Profile Picture" mb={4} />
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>About Me</Heading>
          <Text textAlign="center" color="purple.500">I have experience in building web applications using modern technologies like React, Chakra UI, and more. I love to learn and explore new tools and frameworks to improve my skills.</Text>
        </Box>
        <Flex justify="center" width="100%" mt={4}>
          <Button as="a" href="https://github.com" target="_blank" leftIcon={<FaGithub />} colorScheme="green" variant="outline" mx={2}>
            GitHub
          </Button>
          <Button as="a" href="https://linkedin.com" target="_blank" leftIcon={<FaLinkedin />} colorScheme="green" variant="outline" mx={2}>
            LinkedIn
          </Button>
          <Button as="a" href="mailto:example@example.com" leftIcon={<FaEnvelope />} colorScheme="green" variant="outline" mx={2}>
            Email
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;