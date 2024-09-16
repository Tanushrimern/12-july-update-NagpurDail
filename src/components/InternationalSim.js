import React from "react";

function InternationalSim() {
  return (
    <div class="container">
      {/* <!--banner--> */}
      <div class="banner ">
        <div style={{ padding: "10px" }}></div>
      </div>
      <hr />

      <div style={{ padding: "300px" }}></div>

      {/* <!-- footer--> */}
      <hr />
      <footer>
        <div className="row">
          <div className="col-lg-4">
            <p>
              <strong>Our Links:</strong>
            </p>
            <p>
              <strong>
                <a href="/" style={{ textDecoration: "none", color: "black" }}>
                  Home
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a
                  href="/advertise"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Advertise
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a
                  href="/about"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  About Us
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a
                  href="/listing"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Free Listing
                </a>
              </strong>
            </p>
          </div>
          <div className="col-lg-4">
            <p>
              <strong>Contact Us:</strong>
            </p>
            <p>Phone: +91-123456789</p>
            <p>E-mail: example@email.com</p>
          </div>
          <div className="col-lg-4">
            <div className="social-media">
              <p>
                <strong>Follow us on:</strong>
              </p>
              <a href="#">
                <i
                  className="fa fa-facebook-square"
                  style={{ fontSize: "30px", color: "blue" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fa fa-instagram"
                  style={{ fontSize: "30px", color: "red" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fa fa-linkedin-square"
                  style={{ fontSize: "30px", color: "blue" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fa fa-youtube-square"
                  style={{ fontSize: "30px", color: "red" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <div>
        <p className="copyright">
          <center>
            <strong>Copyright © 2024</strong>
          </center>
        </p>
      </div>
    </div>
  );
}

export default InternationalSim;
