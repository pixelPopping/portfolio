import PropTypes from "prop-types"; // Import PropTypes for props validation
import styles from "./ProjectCard.module.css"; // Ensure you have this CSS module
import { getImageUrl } from "../../utils"; // Ensure this utility function is defined

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a
          href={demo}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          href={source}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
    </div>
  );
};

// Define PropTypes for the ProjectCard component
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired, // Ensure project is marked as required
};

export default ProjectCard; // Default export
