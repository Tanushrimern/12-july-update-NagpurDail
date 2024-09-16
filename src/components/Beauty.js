import React from "react";
import "../App.css";

function Beauty() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div className="banner1">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <div className="container">
          <div className="row hh">
            <div className="col-lg-4 col-lg-41">
              <a href="/beautyarlour" className="icons-img">
                <img src="./images/fafa icon/by.png" className="icons-img" />{" "}
                Beauty Parlours
              </a>
            </div>
            <div className="col-lg-4 col-lg-41">
              <a href="/beautyarlour" className="icons-img">
                <img
                  src="./images/fafa icon/beauty services.png"
                  className="icons-img"
                />{" "}
                Beauty Services
              </a>
            </div>
            <div className="col-lg-4 col-lg-41">
              <a href="/beautyarlour" className="icons-img hide1">
                <img
                  src="./images/fafa icon/bridal makeup.png"
                  className="icons-img"
                />{" "}
                Bridal Makeup
              </a>
            </div>
          </div>
          <div className="row hh">
            <div className="col-lg-4 col-lg-41">
              <a href="/beautyarlour" className="icons-img hide1">
                <img src="./images/fafa icon/slen.png" className="icons-img" />{" "}
                Salons
              </a>
            </div>
            <div className="col-lg-4 col-lg-41">
              <a href="/beautyarlour" className="icons-img hide1">
                <img
                  src="./images/fafa icon/bridal makeup.png"
                  className="icons-img"
                />{" "}
                Spas
              </a>
            </div>
            <div className="col-lg-4 col-lg-41">
              <a href="/beautyarlour" className="icons-img hide1">
                <img
                  src="./images/fafa icon/WeddingPlanning.png"
                  className="icons-img"
                />{" "}
                Bridegroom Makeup
              </a>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 col-lg-61 h">
              <a href="/beautyarlour" className="icons-img">
                <img
                  src="./images/fafa icon/bridal makeup.png"
                  className="icons-img"
                />{" "}
                Bridal Makeup
              </a>
            </div>
            <div className="col-lg-6 col-lg-61 h">
              <a href="/beautyarlour" className="icons-img">
                <img
                  src="./images/fafa icon/WeddingPlanning.png"
                  className="icons-img"
                />{" "}
                Bridegroom
              </a>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 col-lg-61 h">
              <a href="/beautyarlour" className="icons-img">
                <img src="./images/fafa icon/slen.png" className="icons-img" />{" "}
                Salons
              </a>
            </div>
            <div className="col-lg-6 col-lg-61 h">
              <a href="/beautyarlour" className="icons-img">
                <img
                  src="./images/fafa icon/bridal makeup.png"
                  className="icons-img"
                />{" "}
                Spas
              </a>
            </div>
          </div>
        </div>
        <hr />
        {/* Footer */}
        <footer>
          <div className="row">
            <div className="col-lg-4">
              <p>
                <strong>Our Links:</strong>
              </p>
              <p>
                <strong>
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
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
    </div>
  );
}

export default Beauty;
