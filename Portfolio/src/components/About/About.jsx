import { getImageUrl } from "../../utils";
import styles from "./about.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Im a Frontend student with experience in HTML, CSS, basic
                JavaScript, and basic React.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
