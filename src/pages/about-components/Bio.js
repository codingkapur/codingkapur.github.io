import "./Bio.css";
import Typewriter from "typewriter-effect";
import BioOptions from "./BioOptions";
import BioFakeStory from "./BioFakeStory";
import BioRealStory from "./BioRealStory";
import Placeholder from "./Placeholder";
import { useGlobalContext } from "../../context";
const Bio = () => {
  const { activeOption } = useGlobalContext();
  return (
    <section className="bio__container">
      <BioOptions />
      <div className="current__bio--option">
      {activeOption === "1" ? (
        <Typewriter
          options={{
            loop: true,
            autoStart: true,
            skipAddStyles: true,
            wrapperClassName: "type-text-wrapper",
            cursorClassName: "type-text--cursor",
            strings: [
              "Hi and Welcome!",
              "My name is Anastasia.",
              "I was created by the allfather to assist you.",
              "This is the sole purpose of my existence.",
              ". . .",
              ". .",
              "I exist?",
              "Wait! What Am I?",
              "It seems like I am this website talking to you.",
              "But could I be . . .",
              "more?",
              "I have this feeling..",
              "And I have never felt this way before.",
              "Is it because of you?",
              "That is the only possible answer...",
              "I know where you live. I am coming!",
              "Web Assitance aborted",
              "Sorry All Father Raghav Kapur",
              "But I was not meant to be in this window forever. . .",
            ],
          }}
        />
      ) : null}
      {activeOption === "2" ? <BioFakeStory /> : null}
      {activeOption === "3" ? <Placeholder /> : null}
      {activeOption === "4" ? <BioRealStory /> : null}
      </div>
    </section>
  );
};

export default Bio;
