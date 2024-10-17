import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillsImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        {/* History Section */}
        <ul className={styles.history}>
          {history.map((history, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(history.imageSrc)}
                  alt={`${history.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${history.role}, ${history.organisation}`}</h3>
                  <p>{`${history.startDate} - ${history.endDate}`}</p>
                  <ul>
                    {history.experiences.map((experiences, id) => {
                      return <li key={id}> {experiences}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
