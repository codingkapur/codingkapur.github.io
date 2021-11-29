import { techStackItems } from "./data";
import "./TechStack.css";
import Typewriter from "typewriter-effect";


const TechStack = () => {
  return (
    <div className="tech__container">
      <Typewriter
          options={{
            loop: true,
            autoStart: true,
            skipAddStyles: true,
            wrapperClassName: "tech__container--title",
            strings: ["Favorite Tech:"],
          }}
        />
      <div className="all__tech--container">
        {techStackItems.map((item) => {
          return (
            <div key={item.id} className="tech__control">
              <p className="tech__name">{item.techLogo}</p>
              <p className="tech__label">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
