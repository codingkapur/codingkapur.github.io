import "./MailForm.css";
import { useGlobalContext } from "../../context";
import { RiCloseCircleFill } from "react-icons/ri";
const MailForm = () => {
  const { mailFormOpen, closeMailForm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={
        mailFormOpen ? "mail__form--container active" : "mail__form--container"
      }
    >
      <p className="form__title">Commencing Virtual Handshake!</p>
      <RiCloseCircleFill className="close-mail-btn" onClick={closeMailForm} />
      <form action="submit" className="form-container" onSubmit={handleSubmit}>
        <div className="form-control">
          <input type="text" className="form-control__input"/>
          <label className="form-control__label" autoComplete="off">
            Your <span>Name</span>:
          </label>
        </div>
        <div className="form-control">
          <input type="text" className="form-control__input" />
          <label className="form-control__label">
            <span>Your</span> Email:
          </label>
        </div>
        <div className="form-control">
          <textarea
            type="text"
            className="form-control__input form-control__input-area"
          />
          <label className="form-control__label">
            <span>What's Up?</span>
          </label>
        </div>
        <button type="submit" className="btn send-mail-btn">
          Send It!
        </button>
      </form>
    </div>
  );
};
export default MailForm;
