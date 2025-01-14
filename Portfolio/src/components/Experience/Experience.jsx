import {
  Box,
  Heading,
  VStack,
  HStack,
  Image,
  Text,
  Grid,
  List,
  ListItem,
} from "@chakra-ui/react";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  console.log("Experience component rendered");
  console.log("Skills data:", skills);
  console.log("History data:", history);

  return (
    <Box
      bg="white"
      color="gray.800"
      py={10}
      px={{ base: 6, md: 12 }}
      id="experience"
    >
      {/* Title */}
      <Heading as="h2" size="xl" textAlign="center" color="teal.500" mb={10}>
        Experience
      </Heading>

      <VStack spacing={10}>
        {/* Skills Section */}
        <VStack spacing={6} align="stretch" w="100%">
          <Heading as="h3" size="lg" color="teal.400" mb={4}>
            Skills
          </Heading>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            gap={6}
          >
            {skills.map((skill, id) => (
              <VStack
                key={id}
                spacing={3}
                align="center"
                bg="gray.50"
                p={4}
                borderRadius="lg"
                shadow="sm"
                _hover={{ shadow: "md", transform: "scale(1.05)" }}
                transition="all 0.2s"
              >
                <Box
                  boxSize="100px"
                  bg="white"
                  borderRadius="full"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="sm"
                >
                  <Image
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                    boxSize="60%"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/100"; // Fallback image
                    }}
                  />
                </Box>
                <Text fontSize="md" fontWeight="bold">
                  {skill.title}
                </Text>
              </VStack>
            ))}
          </Grid>
        </VStack>

        {/* History Section */}
        <VStack spacing={6} align="stretch" w="100%">
          <Heading as="h3" size="lg" color="teal.400" mb={4}>
            Work History
          </Heading>
          <List spacing={8}>
            {history.map((item, id) => (
              <HStack
                key={id}
                spacing={6}
                align="flex-start"
                bg="gray.50"
                p={6}
                borderRadius="lg"
                shadow="sm"
                _hover={{ shadow: "md" }}
              >
                <Box boxSize="100px" flexShrink={0}>
                  <Image
                    src={getImageUrl(item.imageSrc)} // Using getImageUrl here
                    alt={`${item.organisation} Logo`}
                    boxSize="100%"
                    objectFit="contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/100"; // Fallback image
                    }}
                  />
                </Box>
                <VStack align="start" spacing={3}>
                  <Heading as="h4" size="md" color="gray.700">
                    {item.role} at {item.organisation}
                  </Heading>
                  <Text fontSize="sm" color="gray.500">
                    {item.startDate} - {item.endDate}
                  </Text>
                  <List spacing={2}>
                    {item.experiences.map((exp, idx) => (
                      <ListItem key={idx} fontSize="sm" color="gray.700">
                        {exp}
                      </ListItem>
                    ))}
                  </List>
                </VStack>
              </HStack>
            ))}
          </List>
        </VStack>
      </VStack>
    </Box>
  );
};
