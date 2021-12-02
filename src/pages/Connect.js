import "./Connect.css";
import MailForm from "./connect-components/MailForm";
import Overlay from './connect-components/Overlay';
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
const Connect = () => {
  const { mailFormOpen, externalRedirect, openMailForm } = useGlobalContext();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  //Get Screen width:
  const getWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getWidth);
    return () => {
      window.removeEventListener("resize", getWidth);
    };
  });

  return (
    <section className="page__container connect__page--container">
      {screenWidth < 650 ? (
        <>
            {mailFormOpen? <Overlay />: null}
           <MailForm />
        </>
      ) : null}
      <h1 className="connect__page--title">
        Let's Get in <span>touch</span>
      </h1>
      <p className="connect__page--subtitle">
        From inventing the wheel to spaceships, we have come a long way by
        co-operating and collaborating with each other. Let's build something
        together.
      </p>
      <div className="connect__container">
        <div className="connect__links">
          <div className="email__container">
            <h2 className="email__title">
              The <span className="span1">fastest</span> and{" "}
              <span className="span2">most effective</span> way to{" "}
              <span className="span2">get in touch</span> with me is to{" "}
              <span className="span1">slide </span>into my{" "}
              <span className="span2">inbox</span>.
            </h2>
            <p className="email__form--btn btn" onClick={openMailForm}>
              Send an Email
            </p>
          </div>
          <div className="connect__social--container">
            <p className="social__connect--main">
              But you can also find me here:{" "}
            </p>

            <p className="social__connect--title">Say hi on Linkedin.</p>
            <p onClick={externalRedirect} id="linkedin">
              <AiFillLinkedin className="social__link--connect" />
            </p>

            <p className="social__connect--title">
              Check out some photos and also send me a DM on Instagram.
            </p>
            <p onClick={externalRedirect} id="instagram">
              <AiFillInstagram className="social__link--connect" />
            </p>

            <p className="social__connect--title">
              Leave a comment on one of my old youtube videos. I probably won't
              see it.
            </p>

            <p onClick={externalRedirect} id="youtube">
              <AiFillYoutube className="social__link--connect" />
            </p>
            <p className="social__connect--title">
              Hit me up on GitHub? Or any of the above..
            </p>
            <p onClick={externalRedirect} id="github">
              <AiFillGithub className="social__link--connect" />
            </p>
          </div>
        </div>
        <div className="login-form-space">
          {screenWidth > 650 ? <MailForm /> : null}
        </div>
      </div>
    </section>
  );
};

export default Connect;
