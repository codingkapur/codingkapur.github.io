import "./About.css";
import Overlay from "../components/Overlay";
import TechStack from "./about-components/TechStack";
import Trivia from "./about-components/Trivia";
import Bio from "./about-components/Bio";

const About = () => {
  return (
    <section className="about__page--container">
      <Overlay />
      <Bio />
      <TechStack />
      {/* <Trivia /> */}
    </section>
  );
};

export default About;
