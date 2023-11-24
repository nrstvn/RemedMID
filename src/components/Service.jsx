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
              {/* <div className="icon">
                <i className="bi bi-binoculars" />
              </div> */}
              {/* <h4 className="title">
                <a href>Magni Dolores</a>
              </h4>
              <p className="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p> */}
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              {/* <div className="icon">
                <i className="bi bi-brightness-high" />
              </div> */}
              {/* <h4 className="title">
                <a href>Nemo Enim</a>
              </h4>
              <p className="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p> */}
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              {/* <div className="icon">
                <i className="bi bi-calendar4-week" />
              </div> */}
              {/* <h4 className="title">
                <a href>Eiusmod Tempor</a>
              </h4>
              <p className="description">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
