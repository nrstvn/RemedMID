const Service = () => {
  return (
    <div>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>
            
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon">
                <i className="bi bi-briefcase" />
              </div>
              <h4 className="title">
                <a href>Photo Editing</a>
              </h4>
              <p className="description">
                Editing some photos and make it more interesting.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="icon">
                <i className="bi bi-card-checklist" />
              </div>
              <h4 className="title">
                <a href>Video Editing</a>
              </h4>
              <p className="description">
               Editing and making your video more appealing.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="icon">
                <i className="bi bi-bar-chart" />
              </div>
              <h4 className="title">
                <a href>Web Designer</a>
              </h4>
              <p className="description">
              Making design for your website to make it more attractive.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={300}
            >
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
