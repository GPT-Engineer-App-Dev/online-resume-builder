import { Container, Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>About Me</Heading>
          <Text fontSize="lg" color="green.500">I have experience in building web applications using modern technologies like React, Chakra UI, and more. I love to learn and explore new tools and frameworks to improve my skills.</Text>
        </Box>
        <Box>
          <Image borderRadius="full" boxSize="150px" src="https://via.placeholder.com/150" alt="Profile Picture" mb={4} />
        </Box>
      </VStack>
    </Container>
  );
};

export default About;