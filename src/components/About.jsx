const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
          Hello, My Full Name is Devan Christovano Prabowo, i like to play games and doing some fun and exciting stuff.
          </p>
          <p>
          Here is some information about me.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="/img/profile-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p className="fst-italic">
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Birthday:</strong> <span>29 September 1999</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Phone:</strong> <span>+6285256187322</span>
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
                    <span>24</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Degree:</strong> <span>College Student</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Email:</strong> <span>devanprabowo1@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
