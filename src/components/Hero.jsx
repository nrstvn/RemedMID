/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>Hello!</h1>
        <h2>I'm Devan Christovano Prabowo</h2>
        <p>
          {" I'm Currently Studying At UNKLAB University "}
          <span
            className="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          />
        </p>
      </div>
    </section>
  );
};

export default Hero;
