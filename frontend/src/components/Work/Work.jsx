import React from "react";

export default function Work() {
  return (
    <section className="work_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>How We Work!</h2>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="detail_container">
              <div className="box b-1">
                <div className="top-box">
                  <div className="icon-box">
                    <img src="images/work-i1.png" alt="" />
                  </div>
                  <h5>We Generate A Good Idea First</h5>
                </div>
                <div className="bottom-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                </div>
              </div>
              <div className="box b-1">
                <div className="top-box">
                  <div className="icon-box">
                    <img src="images/work-i2.png" alt="" />
                  </div>
                  <h5>Then We Start Applying Ideas</h5>
                </div>
                <div className="bottom-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src="images/work-img.png" alt="" />
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href="/team">Read More</a>
        </div>
      </div>
    </section>
  );
}
