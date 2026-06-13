import PropTypes from "prop-types";
import styles from "./Projects.module.css";
import projects from "../../data/Projects.json";
import { ProjectCard } from "./ProjectCard";

// Projects Component
export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

// PropTypes for Projects component
Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
      demo: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
    })
  ).isRequired,
};
