import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero__container">
      <div className="overlay"></div>
      <div className="hero__titles--container">
        <p className="hero__main--title">Your Vision</p>
        <p className="hero__sub--title">For the world to see</p>
        <p className="hero__info--text">We bring your visions to life. <br />Engineering web solutions for businesses around the world!</p>
      </div>
    </main>
  );
};
export default Hero;
