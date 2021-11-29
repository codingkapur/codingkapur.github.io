import { trivia } from "./data";

const Trivia = () => {
  return (
    <div className="trivia__container">
      <h2 className="trivia__container--title about__title">Trivia:</h2>
      <div className="all__trivia--container">
      {trivia.map((item) => {
        return (
          <div key={item.id} className="trivia__control">
            <p className="trivia__name">{item.title}</p>
            <p className="trivia__label">{item.info}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
};
export default Trivia;
