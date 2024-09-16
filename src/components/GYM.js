import React, { useState } from "react";
import WhatsAppLinks from "./WhatsAppLinks";
import "../App.css";

const phoneNumbers = ["919604589537", "919834467583", "918080724453"];
const message = "I Found Your Business On NagpurDial";

const generateWhatsAppLinks = () => {
  return phoneNumbers.map((phone) => {
    return `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      phone
    )}&text=${encodeURIComponent(message)}`;
  });
};

const GYM = () => {
  const [whatsappLinks] = useState(generateWhatsAppLinks());

  const handleButtonClick = (index) => {
    window.open(whatsappLinks[index], "_blank");
  };

  return (
    <div className="container">
      <div className="container-fluid ">
        <div className="banner39">
          <div style={{ padding: "10px" }}></div>
        </div>

        <h5>
          <strong>Top Gyms in Nagpur</strong>
        </h5>

        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <br />
                <div
                  id="carouselExampleSlidesOnly1"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./images/client/master.png"
                        className="d-block w-100"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/grow your business.png"
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/mens.png"
                        className="d-block w-100"
                        alt="Slide 3"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleSlidesOnly1"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleSlidesOnly1"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Next</span>
                  </a>
                  <br />
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <h5 className="bp mt-1">
                <b>Strong Muscle Gym</b>
              </h5>
              <p>
                Chikli road, New akash Nagar, Tapasya vidhyalaya, Manewada, plot
                no- 11
              </p>
              <p>Fitness</p>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              <i
                className="fa fa-star-half-full"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>

              <div className="container mt-1">
                <a href="/model2">
                  <button
                    type="button"
                    className="btn btn-primary mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    <i
                      className="fa fa-comments"
                      style={{ fontSize: "20px", color: "red" }}
                    ></i>
                    <b> chat</b>
                  </button>
                </a>
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={() => handleButtonClick(0)}
                >
                  <i
                    className="fa fa-comments"
                    style={{ fontSize: "20px", color: "red" }}
                  ></i>
                  <b> chat2</b>
                </button>
              </div>

              <WhatsAppLinks links={whatsappLinks} />

              <div className="modal" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Nagpurdial</h4>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h6>Contact Us for Query here</h6>
                    </div>
                    <div className="modal-footer">
                      <a
                        href="https://api.whatsapp.com/send?phone=918080724453&text=I found your business on NagpurDial"
                        target="_blank"
                      >
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs="modal"
                        >
                          Contact
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "5px" }}></div>

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
                    style={{ fontSize: "30px", color: " blue" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa fa-instagram"
                    style={{ fontSize: "30px", color: " red" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa fa-linkedin-square"
                    style={{ fontSize: "30px", color: " blue" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fa fa-youtube-square"
                    style={{ fontSize: "30px", color: " red" }}
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
};

export default GYM;
