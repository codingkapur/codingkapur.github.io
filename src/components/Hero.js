import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero__container">
      <div className="overlay"></div>
      <div className="hero__titles--container">
        <p className="hero__main--title">your vision</p>
        <p className="hero__sub--title">for the world to see</p>
        <p className="hero__info--text ">
          Let's bring your message to the world!
          <br/>
          Engineering web solutions for individuals and businesses around the
          world!
        </p>
        <p className="hero__learn-more-btn">Learn More</p>
      </div>
    </main>
  );
};
export default Hero;
