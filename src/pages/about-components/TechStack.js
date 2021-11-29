import { techStackItems } from "./data";
import "./TechStack.css";

const TechStack = () => {
  return (
    <div className="tech__container">
      <h2 className="tech__container--title about__title">Favorite Tech:</h2>
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
