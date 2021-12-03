import "./StatusMessage.css";
import { useGlobalContext } from "../../context";

const StatusMessage = () => {
  const { closeMailForm, setMessageStatus } = useGlobalContext();

  const handleNiceClick = () => {
    setMessageStatus(false);
    closeMailForm();
  };

  return (
    <div className="mail__form--status--container">
      <p className="status__message">Message Sent!</p>
      <p className="btn status__message--btn" onClick={handleNiceClick}>
        Nice
      </p>
    </div>
  );
};

export default StatusMessage;
