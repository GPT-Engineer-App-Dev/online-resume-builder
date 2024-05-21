import { Container, Box, Heading, Text, VStack, Link } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Projects</Heading>
        </Box>
        <VStack spacing={4} align="start">
          <Box>
            <Heading as="h3" size="md">Project 1</Heading>
            <Text>Description of project 1. <Link href="https://github.com/project1" color="teal.500" isExternal>View on GitHub</Link></Text>
          </Box>
          <Box>
            <Heading as="h3" size="md">Project 2</Heading>
            <Text>Description of project 2. <Link href="https://github.com/project2" color="teal.500" isExternal>View on GitHub</Link></Text>
          </Box>
          <Box>
            <Heading as="h3" size="md">Project 3</Heading>
            <Text>Description of project 3. <Link href="https://github.com/project3" color="teal.500" isExternal>View on GitHub</Link></Text>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Projects;