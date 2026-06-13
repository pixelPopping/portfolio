import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  console.log("PROJECT:", title);
  console.log("DEMO:", demo);
  console.log("SOURCE:", source);

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      {/* DEBUG */}
      <div
        style={{
          background: "#222",
          color: "white",
          padding: "10px",
          marginBottom: "10px",
          wordBreak: "break-all",
        }}
      >
        <p><strong>Demo:</strong> {String(demo)}</p>
        <p><strong>Source:</strong> {String(source)}</p>
      </div>

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
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          onClick={() => console.log("Demo clicked:", demo)}
        >
          Live Demo
        </a>

        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          onClick={() => console.log("GitHub clicked:", source)}
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string,
    source: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;