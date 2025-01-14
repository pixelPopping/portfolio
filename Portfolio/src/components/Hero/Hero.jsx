import { getImageUrl } from "../../utils";

export const Hero = () => {
  // Generate the correct image URL
  const imageUrl = getImageUrl("hero/20230613_164750.jpg");

  console.log("Hero component rendered");
  console.log("Image URL:", imageUrl); // Check if the image URL is correct

  return (
    <section style={{ textAlign: "center", padding: "20px" }}>
      <div>
        <h1>Hi Welcome, I’m Yorian</h1>
        <p>
          I am a Front-end developer student from the Netherlands. In my
          previous career I worked as a chef and showcased my creativity in
          cooking. Now Im studying web development, and I am eager to learn the
          world of ICT.
        </p>
        <a href="mailto:sydney-cook@outlook.com">Contact Me</a>
      </div>
      {/* Use the imageUrl value in the img src */}
      <div>
        <img
          src={imageUrl}
          alt="hero"
          style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div />
    </section>
  );
};
