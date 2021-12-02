import { useGlobalContext } from "../../../context";

const Bio2 = () => {
  const { activeOption } = useGlobalContext();

  return (
    <div
      className={
        activeOption ==="2"
          ? "bio__component--container active"
          : "bio__component--container"
      }
    >
      <p className="bio__text--field">
        The way we interact with each other in society, and reality itself, is
        changing at an incredible pace. Compared to 20 years ago, it is safe to
        say that we have undergone a revolution!
      </p>
      <p className="bio__text--field">
        We as a society are at a stage where we have advanced to such an extent
        that less time is required to make geometric growth in technological
        evolution.
      </p>
      <p>
        <span className="bio-question">QUESTION:</span> What conveniences will
        be added to our lives so that we can truly focus on things that are
        important to us!
      </p>
    </div>
  );
};
export default Bio2;
