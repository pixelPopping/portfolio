import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  // Generate the correct image URL
  const imageUrl = getImageUrl("hero/20230613_164750.jpg");

  console.log(imageUrl); // This should log the correct path to the image

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi Welcome, I’m Yorian</h1>
        <p className={styles.description}>
          I am a Front-end developer student from the Netherlands. In my
          previous career I worked as a chef and showcased my creativity in
          cooking. Now Im studying web development, and iam eager to learn the
          world of ICT.
        </p>
        <a href="mailto:sydney-cook@outlook.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      {/* Use the imageUrl value in the img src */}
      <img src={imageUrl} alt="hero" className={styles.heroImage} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
