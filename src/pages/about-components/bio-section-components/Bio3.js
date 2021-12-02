import { useGlobalContext } from "../../../context";

const Bio3 = () => {
  const { activeOption } = useGlobalContext();

  return (
    <div
      className={
        activeOption === "3"
          ? "bio__component--container active"
          : "bio__component--container"
      }
    >
      <p className="bio__text--field">
        As more and more tasks are automated, newer jobs will emerge, and people
        will find themselves with time to pursue work that requires a higher
        degree of creativity and uniqueness.
      </p>
      <p className="bio__text--field">
        Traditional ways of doing things will become less popular as technology
        based solutions will be more efficient and extremely convenient.
      </p>
      <p>
        <span className="bio-question">QUESTION:</span> How will business and
        customers interact with each other, and what will become of privacy in a
        world with unlimited sharing?
      </p>
    </div>
  );
};
export default Bio3;
