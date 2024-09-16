import React from "react";

function Software() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        {/* Banner */}
        <div className="banner12">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        {/* Software Services */}
        <h5>
          <strong>Nagpur's Software Services</strong>
        </h5>
        <div style={{ padding: "2px" }}></div>
        {/* Service 1 */}
        <div style={{ padding: "2px" }}></div>
        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <br />
                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    {/* Carousel items go here */}
                  </div>
                  {/* Carousel Controls */}
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleSlidesOnly"
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
                    href="#carouselExampleSlidesOnly"
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
              {/* Service details */}
              <h5 className="bp mt-1">
                <b>KP Technology</b>
              </h5>
              <p className="bp1">
                Central Avenue Road,Telephone Exchange Square Behind Mascot
                Honda,Nagpur
              </p>
              <p className="bp2" style={{ color: "grey" }}>
                MARG ERP
              </p>
              {/* Ratings */}
              <div>
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
              </div>
              {/* Modal */}
              <div className="container mt-1">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  <i
                    className="fa fa-comments"
                    style={{ fontSize: "20px", color: "red" }}
                  ></i>
                  <b> Chat</b>
                </button>
              </div>
              {/* Modal Content */}
              <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header">
                      <h4 className="modal-title">Contact Us for Query Here</h4>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                      <p>Modal body text goes here.</p>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer">
                      <a
                        href="https://api.whatsapp.com/send?phone=918080724453&text=tanushri."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button type="button" className="btn btn-danger">
                          Contact
                        </button>
                      </a>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat the above structure for other software services */}
        <hr />
        {/* Footer */}
        <footer>
          <div className="row">
            <div className="col-lg-4">
              <p>
                <strong>Our Links:</strong>
              </p>
              <p>
                <strong>Home</strong>
              </p>
              <p>
                <strong>Advertise</strong>
              </p>
              <p>
                <strong>About Us</strong>
              </p>
              <p>
                <strong>Free Listing</strong>
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                <strong>Contact Us:</strong>
              </p>
              <p>Phone: +91-123456789</p>
              <p>Email: example@email.com</p>
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
      </div>
    </div>
  );
}

export default Software;
