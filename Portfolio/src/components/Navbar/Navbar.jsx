import { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="Menu Icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#experience">experience</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
