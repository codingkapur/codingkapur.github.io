import "./MailForm.css";
import { useGlobalContext } from "../../context";
import { RiCloseCircleFill } from "react-icons/ri";
import StatusMessage from "./StatusMessage";
import { useState } from "react";

const MailForm = () => {
  const { mailFormOpen, closeMailForm, messageStatus, setMessageStatus } =
    useGlobalContext();
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  let name, value;
  const sendMessage = (event) => {
    name = event.target.name;
    value = event.target.value;

    setMailData({ ...mailData, [name]: value });
  };
  //Connect with Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = mailData;
    if (name.trim() === "" || message.trim() === "") {
      alert("Fill in all the fields or else what's the point my friend?");
    } else {
      const res = fetch(
        "https://raghavkapur-contact-default-rtdb.firebaseio.com/contactMessages.json",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (res) {
        //Empty the fields
        setMailData({
          name: "",
          email: "",
          message: "",
        });
        setMessageStatus(true);
      } else {
        console.log("error");
      }
    }
  };

  return (
    <div
      className={
        mailFormOpen ? "mail__form--container active" : "mail__form--container"
      }
    >
      <p className="form__title">Commencing Virtual Handshake!</p>
      <RiCloseCircleFill className="close-mail-btn" onClick={closeMailForm} />
      <form method="POST" className="form-container" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            name="name"
            className="form-control__input"
            value={mailData.name}
            onChange={sendMessage}
          />
          <label className="form-control__label" autoComplete="off">
            Your <span>Name</span>:
          </label>
        </div>
        <div className="form-control">
          <input
            type="text"
            name="email"
            className="form-control__input"
            value={mailData.email}
            onChange={sendMessage}
          />
          <label className="form-control__label">
            <span>Your</span> Email:
          </label>
        </div>
        <div className="form-control">
          <textarea
            type="text"
            name="message"
            className="form-control__input form-control__input-area"
            value={mailData.message}
            onChange={sendMessage}
          />
          <label className="form-control__label">
            <span>What's Up?</span>
          </label>
        </div>
        <button type="submit" className="btn send-mail-btn">
          Send It!
        </button>
        {messageStatus ? <StatusMessage /> : null}
      </form>
    </div>
  );
};
export default MailForm;
