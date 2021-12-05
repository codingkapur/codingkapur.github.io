import "./MailForm.css";
import { useGlobalContext } from "../../context";
import { RiCloseCircleFill } from "react-icons/ri";
import StatusMessage from "./StatusMessage";
import { useState } from "react";
import emailjs from "emailjs-com";

const MailForm = () => {
  const { mailFormOpen, closeMailForm, messageStatus, setMessageStatus } =
    useGlobalContext();
  const [mailData, setMailData] = useState({
    sender_name: "",
    sender_email: "",
    sender_message: "",
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

    const { sender_name, sender_email, sender_message } = mailData;
    
    if (
      sender_name.trim() === "" ||
      sender_message.trim() === "" ||
      sender_email.trim() === ""
    ) {
      alert("Fill in all the fields or else what's the point my friend?");
    } else {
      const res = await fetch(process.env.REACT_APP_FIREBASE_CONTACTS, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sender_name,
          sender_email,
          sender_message,
        }),
      });

      emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      if (res) {
        //Empty the fields
        setMailData({
          sender_name: "",
          sender_email: "",
          sender_message: "",
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
            name="sender_name"
            className="form-control__input"
            value={mailData.sender_name}
            onChange={sendMessage}
          />
          <label className="form-control__label" autoComplete="off">
            Your <span>Name</span>:
          </label>
        </div>
        <div className="form-control">
          <input
            type="text"
            name="sender_email"
            className="form-control__input"
            value={mailData.sender_email}
            onChange={sendMessage}
          />
          <label className="form-control__label">
            <span>Your</span> Email:
          </label>
        </div>
        <div className="form-control">
          <textarea
            type="text"
            name="sender_message"
            className="form-control__input form-control__input-area"
            value={mailData.sender_message}
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
