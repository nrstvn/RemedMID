const Portofolio = () => {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
          
          </p>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">Certificate</li>
              <li data-filter=".filter-card">Photoshop Images</li>
            </ul>
          </div>
        </div>
        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src=""
                className="img-fluid"
                alt
              />
              <div className="portfolio-links">
                <a
                  href=""
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 1"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <div className="portfolio-links">
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <div className="portfolio-links">
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src=""
                className="img-fluid"
                alt
              />
              <div className="portfolio-links">
                <a
                  href=""
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <div className="portfolio-links">
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <div className="portfolio-links">
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src=""
                className="img-fluid"
                alt
              />
              <div className="portfolio-links">
                <a
                  href=""
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 1"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="/img/certi.png"
                className="img-fluid"
                alt
              />
              <div className="portfolio-links">
                <a
                  href="/img/certi.png"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
