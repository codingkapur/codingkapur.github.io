import "./About.css";
import TechStack from "./about-components/TechStack";
import Bio from "./about-components/Bio";

const About = () => {
  return (
    <section className="about__page--container">
      <TechStack />
      <Bio />
    </section>
  );
};

export default About;
