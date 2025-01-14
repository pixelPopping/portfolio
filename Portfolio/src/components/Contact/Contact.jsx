import { getImageUrl } from "../../utils";
import {
  Box,
  Heading,
  Text,
  Link,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";

export const Contact = () => {
  console.log("Contact component rendered");

  return (
    <Box
      as="footer"
      id="contact"
      bg="teal.600"
      color="white"
      py={10}
      px={6}
      textAlign="center"
    >
      <VStack spacing={6}>
        {/* Header */}
        <Box>
          <Heading as="h2" fontSize="2xl" mb={2}>
            Contact
          </Heading>
          <Text fontSize="lg">Feel free to reach out</Text>
        </Box>

        {/* Contact Links */}
        <VStack spacing={4} align="start">
          {/* Email Link */}
          <HStack spacing={4}>
            <Image
              src={getImageUrl("Contact/mail.png")}
              alt="Email icon"
              boxSize="30px"
            />
            <Link
              href="mailto:sydney-cook@outlook.com"
              color="white"
              fontSize="lg"
              _hover={{ textDecoration: "underline" }}
            >
              sydney-cook@outlook.com
            </Link>
          </HStack>

          {/* LinkedIn Link */}
          <HStack spacing={4}>
            <Image
              src={getImageUrl("Contact/linkedin.png")}
              alt="LinkedIn icon"
              boxSize="30px"
            />
            <Link
              href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"
              color="white"
              fontSize="lg"
              _hover={{ textDecoration: "underline" }}
            >
              linkedin.com/Yorian Fransz
            </Link>
          </HStack>

          {/* GitHub Link */}
          <HStack spacing={4}>
            <Image
              src={getImageUrl("Contact/github.png")}
              alt="GitHub icon"
              boxSize="30px"
            />
            <Link
              href="https://github.com/"
              color="white"
              fontSize="lg"
              _hover={{ textDecoration: "underline" }}
            >
              github.com/PixelPopping
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};
