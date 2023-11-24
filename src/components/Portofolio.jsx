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
              {/* <li data-filter=".filter-web">Web</li> */}
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
                src="\img\portfolio\javascript_basic certificate_page-0001.jpg"
                className="img-fluid"
                alt
              />
              <div className="portfolio-links">
                <a
                  href="\img\portfolio\javascript_basic certificate_page-0001.jpg"
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
              {/* <img
                src="public/img/portfolio/portfolio-2.jpg"
                className="img-fluid"
                alt
              /> */}
              <div className="portfolio-links">
                {/* <a
                  href="public/img/portfolio/portfolio-2.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i className="bx bx-plus" />
                </a> */}
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              {/* <img
                src="public/img/portfolio/portfolio-3.jpg"
                className="img-fluid"
                alt
              /> */}
              <div className="portfolio-links">
                {/* <a
                  href="publioc/img/portfolio/portfolio-3.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 2"
                >
                  <i className="bx bx-plus" />
                </a> */}
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="\img\portfolio\CAR and CITY.jpg"
                className="img-fluid"
                alt
              />
              <div className="portfolio-links">
                <a
                  href="\img\portfolio\CAR and CITY.jpg"
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
              {/* <img
                src="public/img/portfolio/portfolio-5.jpg"
                className="img-fluid"
                alt
              /> */}
              <div className="portfolio-links">
                {/* <a
                  href="public/img/portfolio/portfolio-5.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 2"
                >
                  <i className="bx bx-plus" />
                </a> */}
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              {/* <img
                src="public/img/portfolio/portfolio-6.jpg"
                className="img-fluid"
                alt
              /> */}
              <div className="portfolio-links">
                {/* <a
                  href="public/img/portfolio/portfolio-6.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 3"
                >
                  <i className="bx bx-plus" />
                </a> */}
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src="\img\portfolio\Self-Picture.jpg"
                className="img-fluid"
                alt
              />
              <div className="portfolio-links">
                <a
                  href="\img\portfolio\Self-Picture.jpg"
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
                src="\img\portfolio\Undangan Oma Front.png"
                className="img-fluid"
                alt
              />
              <div className="portfolio-links">
                <a
                  href="\img\portfolio\Undangan Oma Front.png"
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
            {/* <div className="portfolio-wrap">
              <img
                src="public/img/portfolio/portfolio-9.jpg"
                className="img-fluid"
                alt
              />
              <div className="portfolio-links">
                <a
                  href="public/img/portfolio/portfolio-9.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
