import { SimpleGrid, Box, Text } from "@chakra-ui/react"; // Import Chakra UI components
import projects from "../../data/projects.json"; // Import projects data from JSON
import { ProjectCard } from "./ProjectCard"; // Import the ProjectCard component

export const Projects = () => {
  return (
    <Box as="section" id="projects" p="6">
      {/* Section Title */}
      <Text fontSize="3xl" fontWeight="bold" mb="6" color="teal.600">
        Projects
      </Text>

      {/* Projects Grid */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} /> // Render ProjectCard for each project
        ))}
      </SimpleGrid>
    </Box>
  );
};
