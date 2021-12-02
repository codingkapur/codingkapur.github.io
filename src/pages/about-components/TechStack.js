import { techStackItems } from "./data";
import "./TechStack.css";
import { useEffect, useState } from "react";

const TechStack = () => {
  //Type Writer Text Effect
  const [typetext, setTypetext] = useState("");
  const titleString = "Tech Stack:";
  let i = 0;
  const speed = 150;
  let str = "";

  const typeFx = () => {
    if (i < titleString.length) {
      str += titleString.charAt(i);
      setTypetext(str);
      i++;
      setTimeout(typeFx, speed);
    }
  };

  useEffect(() => {
    typeFx();
  }, []);

  return (
    <div className="tech__container">
      <h2 className="tech__container--title">{typetext}</h2>
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
