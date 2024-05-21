import { Box, Flex, Link, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold" color={color}>
            MyWebsite
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" mx={2} color={color}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" mx={2} color={color}>
            About
          </Link>
          <Link as={RouterLink} to="/projects" mx={2} color={color}>
            Projects
          </Link>
          <Button onClick={toggleColorMode} ml={4}>
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;