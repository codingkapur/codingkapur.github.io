import "./Bio.css";
import BioOptions from "./BioOptions";
import { useGlobalContext } from "../../context";
import Bio1 from "./bio-section-components/Bio1";
import Bio2 from "./bio-section-components/Bio2";
import Bio3 from "./bio-section-components/Bio3";
import Bio4 from "./bio-section-components/Bio4";
const Bio = () => {
  const { activeOption } = useGlobalContext();
  return (
    <section className="bio__container">
      <p className="about--me__title">About Me:</p>
      <div className="current__bio--option">
      {activeOption === "1" ? <Bio1/>: null}
      {activeOption === "2" ?<Bio2/> : null}
      {activeOption === "3" ? <Bio3/> : null}
      {activeOption === "4" ? <Bio4/> : null}
      </div>
      <BioOptions />

    </section>
  );
};

export default Bio;
