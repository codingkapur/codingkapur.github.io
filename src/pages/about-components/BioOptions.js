import { BsChevronDoubleDown } from "react-icons/bs";
import { useGlobalContext } from "../../context";

const BioOptions = () => {
  const {activeOption, handleOptionClick} = useGlobalContext();
  return (
    <div className="bio__options--container">
      <p
        className={activeOption === "1" ? "bio__option active" : "bio__option"}
        id="1"
        onClick={handleOptionClick}
      >
        <BsChevronDoubleDown />
      </p>
      <span
        className={
          activeOption >= Number("2") ? "options__span active" : "options__span"
        }
      ></span>
      <p
        className={activeOption === "2" ? "bio__option active" : "bio__option"}
        id="2"
        onClick={handleOptionClick}
      >
        <BsChevronDoubleDown />
      </p>
      <span
        className={
          activeOption >= Number("3") ? "options__span active" : "options__span"
        }
      ></span>
      <p
        className={activeOption === "3" ? "bio__option active" : "bio__option"}
        id="3"
        onClick={handleOptionClick}
      >
        <BsChevronDoubleDown />
      </p>
      <span
        className={
          activeOption >= Number("4") ? "options__span active" : "options__span"
        }
      ></span>
      <p
        className={activeOption === "4" ? "bio__option active" : "bio__option"}
        id="4"
        onClick={handleOptionClick}
      >
        <BsChevronDoubleDown />
      </p>
    </div>
  );
};

export default BioOptions;
