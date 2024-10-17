import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("Contact/mail.png")} alt="email icon" />
          <a href="mailto:sydney-cook@outlook.com">sydney-cook@outlook.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("Contact/linkedin.png")} alt="linkedin icon" />
          <a href=" https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin">
            linkedin.com/Yorian Fransz
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("Contact/github.png")} alt="github icon" />
          <a href="https://github.com/">github.com/PixelPopping</a>
        </li>
      </ul>
    </footer>
  );
};
