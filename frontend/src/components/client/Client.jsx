import React from "react";

export default function Client() {
  return (
    <div>
      <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>Testimonial</h2>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Normal distribution</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look
                    </p>
                    <img src="images/quote.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Normal distribution</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look
                    </p>
                    <img src="images/quote.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Normal distribution</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look
                    </p>
                    <img src="images/quote.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn-container">
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
