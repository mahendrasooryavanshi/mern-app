import React from "react";

export default function Service() {
  return (
    <div>
      <section className="service_section layout_padding">
        <div className="container-fluid">
          <div className="heading_container">
            <h2>Our Services</h2>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>

          <div className="service_container">
            <div className="box">
              <div className="img-box">
                <img src="images/s-1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Brand Promotion</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s-2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Video Marketing</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s-3.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Site Analysis</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s-4.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Social Media Marketing</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/s-5.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>SEO Optimization</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="/work">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
}
