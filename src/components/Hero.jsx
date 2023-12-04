/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>Hello!</h1>
        <h2>Saya Norris stiven mosses Dompas</h2>
        <p>
          {" Saya adalah Mahasiswa di Universitas Klabat "}
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
