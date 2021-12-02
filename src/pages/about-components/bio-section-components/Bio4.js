import { useGlobalContext } from "../../../context";

const Bio4 = () => {
  const { activeOption } = useGlobalContext();

  return (
    <div
      className={
        activeOption === "4"
          ? "bio__component--container active"
          : "bio__component--container"
      }
    >
      <p className="bio__text--field">These are exciting questions!</p>
      <p className="bio__text--field">
        So I began with core Front End Technologies like HTML, CSS and
        Javascript.
      </p>
      <p className="bio__text--field">
        And from there, I took a deep dive into designing and developing full
        fledged web solutions!
      </p>
      <p className="bio__text--field">
        And the best part is that learning everyday is an integral part of this
        journey.
      </p>
      <p className="bio__text--field">
        And problem solving is the essence. Let's solve a problem together!
      </p>
    </div>
  );
};
export default Bio4;
