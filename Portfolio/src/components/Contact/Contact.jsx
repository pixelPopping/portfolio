import { getImageUrl } from "../../utils"; // import getImageUrl
import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/mail.png")} alt="Email icon" />
          <a href="mailto:sydney-cook@outlook.com">sydney-cook@outlook.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/yorian-fransz-58111527b/">
            linkedin.com/yorian-fransz
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="GitHub icon" />
          <a href="https://www.github.com/Pixelpopping">
            github.com/PixelPopping
          </a>
        </li>
      </ul>
    </footer>
  );
};
