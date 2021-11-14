import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero__container">
      <div className="overlay"></div>
      <div className="hero__titles--container">
        <p className="hero__main--title">Your Vision</p>
        <p className="hero__sub--title">For the world to see</p>
        <p className="hero__info--text">Bringing your message to life. <br />Engineering web solutions for individuals and businesses around the world!</p>
        <p className="hero__learn-more">Learn More</p>
      </div>
    </main>
  );
};
export default Hero;
