import PropTypes from "prop-types";
import {
  Box,
  Image,
  Heading,
  Text,
  VStack,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  console.log("ProjectCard component rendered with project:", project);

  const { title, imageSrc, description, skills, demo, source } = project;

  return (
    <Box
      bg="white"
      borderRadius="lg"
      shadow="sm"
      p={6}
      maxW="md"
      mx="auto"
      _hover={{
        shadow: "md",
        transform: "scale(1.05)",
        transition: "all 0.2s",
      }}
    >
      <Image
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        borderRadius="md"
        mb={4}
      />
      <Heading as="h3" size="lg" mb={2}>
        {title}
      </Heading>
      <Text fontSize="md" color="gray.600" mb={4}>
        {description}
      </Text>
      <VStack align="start" spacing={2} mb={4}>
        <Heading as="h4" size="sm" color="teal.500">
          Skills
        </Heading>
        <List spacing={2}>
          {skills?.map((skill, id) => (
            <ListItem key={id} fontSize="sm" color="gray.700">
              {skill}
            </ListItem>
          ))}
        </List>
      </VStack>
      <VStack spacing={4} direction="row" align="center">
        {demo && (
          <Link
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            color="teal.500"
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            Demo
          </Link>
        )}
        {source && (
          <Link
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            color="teal.500"
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            Source
          </Link>
        )}
      </VStack>
    </Box>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
