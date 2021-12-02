import { useGlobalContext } from "../../../context";
const Bio1 = () => {
  const { activeOption } = useGlobalContext();

  return (
    <div
      className={
        activeOption === "1"
          ? "bio__component--container active"
          : "bio__component--container"
      }
    >
      <p className="bio__text--field">
        Hey there!
        <br />
        My name is Raghav. I am a Software Developer.
      </p>
      <p className="bio__text--field">
        I am formally educated in law and have a few years of experience as a
        litigator.
      </p>
      <p className="bio__text--field">
        But I find technology and software to be extremely fascinating.
      </p>
      <p className="bio__text--field">
        As I witness the impact of technology on my daily life, I cannot help
        but imagine what the landscape will look like in the next 20 years!
      </p>
      <p className="bio__text--field-question">
        <span className="bio-question">QUESTION:</span> Now that devices are an
        inextricable parts of our lives, how will we use them to advance as a
        species?
      </p>
      <p className="bio__text--field"></p>
    </div>
  );
};
export default Bio1;
