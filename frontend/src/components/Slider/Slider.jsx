import React from "react";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <section className="slider_section ">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="detail_box">
                    <h1>The best marketing</h1>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                    </p>
                    <div className="btn-box">
                      <Link to={"/contact"} className="btn-1">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="detail_box">
                    <h1>The best marketing</h1>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                    </p>
                    <div className="btn-box">
                      <Link href="" className="btn-1">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="detail_box">
                    <h1>The best marketing</h1>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                    </p>
                    <div className="btn-box">
                      <Link href="" className="btn-1">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-container">
          <Link
            className="carousel-control-prev"
            to={"#carouselExampleIndicators"}
            role="button"
            data-slide="prev"
          >
            <span className="sr-only">Previous</span>
          </Link>
          <a
            className="carousel-control-next"
            to="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}
