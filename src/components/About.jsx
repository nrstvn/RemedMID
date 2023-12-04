const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
          I am determined to learn new things/work to pursue a
good career in my self-development. I am a good person,
disciplined, polite and respectful to everyone. I can work
professionally
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="/public/img/img01.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>UI/UX Designer &amp; Programmer.</h3>
            <p className="fst-italic"></p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Birthday:</strong> <span>28 November 1997</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Phone:</strong> <span>+6281247817616</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                    <span>Manado, Indonesia</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                    <span>26</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Degree:</strong> <span>College Student</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Email:</strong> <span>noris.stiven18@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="social-links mt-3 text-center">
              <a href="https://twitter.com/nrstvn" className="twitter">
                <i className="bx bxl-twitter" style={{ fontSize: "64px"}} />
              </a>
              <a href="https://www.facebook.com/noris.stiven" className="facebook">
                <i className="bx bxl-facebook" style={{ fontSize: "64px"}}/>
              </a>
              <a href="https://www.instagram.com/norris.dompas" className="instagram">
                <i className="bx bxl-instagram" style={{ fontSize: "64px"}} />
              </a>
              <a href="https://github.com/nrstvn" className="github">
                <i className="bx bxl-github" style={{ fontSize: "64px"}} />
              </a>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
