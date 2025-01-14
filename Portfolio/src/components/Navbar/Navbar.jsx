import { useState } from "react";
import { Box, Flex, IconButton, VStack, Link } from "@chakra-ui/react";
import { getImageUrl } from "../../utils"; // Assuming this is where your image path generator is located

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  console.log("Navbar component rendered");
  console.log("Menu Open:", menuOpen);

  const logoUrl = getImageUrl("logo.png"); // Example for a custom logo image

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={10}
      bg="white"
      boxShadow="sm"
    >
      <Flex
        justify="space-between"
        align="center"
        p={{ base: 4, sm: 6 }}
        maxW="1200px"
        mx="auto"
      >
        {/* Logo or custom title */}
        <Link href="/" fontSize="2xl" fontWeight="bold" color="teal.500">
          <img src={logoUrl} alt="Portfolio Logo" />
        </Link>

        {/* Menu Button (Hamburger or Close icon) */}
        <IconButton
          // Use the actual Chakra UI icons
          onClick={() => setMenuOpen(!menuOpen)}
          variant="ghost"
          aria-label="Toggle menu"
          display={{ base: "block", sm: "none" }} // Mobile view only
        />

        {/* Navigation Menu */}
        <VStack
          as="ul"
          spacing={4}
          display={{ base: menuOpen ? "block" : "none", sm: "flex" }} // Toggle menu visibility
          align="center"
          direction={{ base: "column", sm: "row" }}
          width="100%"
        >
          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            fontSize="lg"
            color="gray.800"
            _hover={{ color: "teal.500" }}
          >
            About
          </Link>
          <Link
            href="#experience"
            onClick={() => setMenuOpen(false)}
            fontSize="lg"
            color="gray.800"
            _hover={{ color: "teal.500" }}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            onClick={() => setMenuOpen(false)}
            fontSize="lg"
            color="gray.800"
            _hover={{ color: "teal.500" }}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            fontSize="lg"
            color="gray.800"
            _hover={{ color: "teal.500" }}
          >
            Contact
          </Link>
        </VStack>
      </Flex>
    </Box>
  );
};
