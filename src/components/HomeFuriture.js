import React from "react";
function HomeFuriture() {
  return (
    <div>
      <div class="container">
        <div class="container-fluid p-10">
          <div style={{ padding: "2px" }}></div>
          <div class="banner2 ">
            <div style={{ padding: "10px" }}></div>
          </div>
          <div style={{ padding: "5px" }}></div>

          <h5>
            <strong>Nagpur's Top Furniture Services</strong>
          </h5>
          <div style={{ padding: "2px" }}></div>

          <div class="beauty">
            <div class="row">
              <div class="col-lg-4">
                <div class="container">
                  <br />
                  <div
                    id="carouselExampleSlidesOnly"
                    class="carousel slide"
                    data-ride="carousel"
                    data-interval="false"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="./images/client/ss1.png"
                          class="d-block w-100"
                          alt="Slide 1"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss2.png"
                          class="d-block w-100"
                          alt="Slide 2"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss3.png"
                          class="d-block w-100"
                          alt="Slide 3"
                        />
                      </div>
                    </div>
                    <a
                      class="carousel-control-prev"
                      href="#carouselExampleSlidesOnly"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only text-danger">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#carouselExampleSlidesOnly"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only text-danger">Next</span>
                    </a>
                    <br />
                  </div>
                </div>
              </div>

              <div class="col-lg-8">
                <h5 class="bp">
                  <b>S.S Furniture</b>
                </h5>
                <p class="bp1">
                  Behind Agrasen Metro Station, Near Blue Daimond School, Jyoti
                  Nagar, Nagpur.
                </p>
                <p class="bp2" style={{ color: "grey" }}>
                  Manufacturers of Hydraulic Chairs & All Types of Repairing
                  Works
                </p>

                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>

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
                        <h4 className="modal-title">
                          Contact Us for Query Here
                        </h4>
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
                <br />
              </div>
            </div>
          </div>

          <div style={{ padding: "5px" }}></div>
          {/* <!-- client 2 --> */}
          <div class="beauty">
            <div class="row">
              <div class="col-lg-4">
                <div class="container">
                  <br />
                  <div
                    id="carouselExampleSlidesOnly2"
                    class="carousel slide"
                    data-ride="carousel"
                    data-interval="false"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="./images/client/ss1.png"
                          class="d-block w-100"
                          alt="Slide 1"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss2.png"
                          class="d-block w-100"
                          alt="Slide 2"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss3.png"
                          class="d-block w-100"
                          alt="Slide 3"
                        />
                      </div>
                    </div>
                    <a
                      class="carousel-control-prev"
                      href="#carouselExampleSlidesOnly2"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only text-danger">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#carouselExampleSlidesOnly2"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only text-danger">Next</span>
                    </a>
                    <br />
                  </div>
                </div>
              </div>

              <div class="col-lg-8">
                <h5 class="bp">
                  <b>Bharat Furniture</b>
                </h5>
                <p class="bp1">
                  Sadar Showroom - 5, Residency Rd, Sadar, Nagpur, Maharashtra
                  440001 Wardha Showroom - 24, Pragati Layout,Somalwada, Wardha
                  Road, Nagpur, Maharashtra 440025
                </p>
                <p class="bp2" style={{ color: "grey" }}>
                  Home Furniture | Office Furniture | Outdoor Furniture| Modular
                  Kitchen|
                </p>

                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                {/* 
<!-- modal --> */}
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
                        <h4 className="modal-title">
                          Contact Us for Query Here
                        </h4>
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
                <br />
              </div>
            </div>
          </div>

          <div style={{ padding: "5px" }}></div>
          {/* <!--client 3 --> */}
          <div class="beauty">
            <div class="row">
              <div class="col-lg-4">
                <div class="container">
                  <br />
                  <div
                    id="carouselExampleSlidesOnly3"
                    class="carousel slide"
                    data-ride="carousel"
                    data-interval="false"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="./images/client/ss1.png"
                          class="d-block w-100"
                          alt="Slide 1"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss2.png"
                          class="d-block w-100"
                          alt="Slide 2"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss3.png"
                          class="d-block w-100"
                          alt="Slide 3"
                        />
                      </div>
                    </div>
                    <a
                      class="carousel-control-prev"
                      href="#carouselExampleSlidesOnly3"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only text-danger">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#carouselExampleSlidesOnly3"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only text-danger">Next</span>
                    </a>
                    <br />
                  </div>
                </div>
              </div>

              <div class="col-lg-8">
                <h5 class="bp">
                  <b>Spanwood Furniture</b>
                </h5>
                <p class="bp1">
                  Hudkeshwar Rd, near Radha Krishna Mandir, Nagpur
                </p>
                <p class="bp2" style={{ color: "grey" }}>
                  Bedroom | Kitchen | Wardrobe, Sofas| Mattresses| Tables
                </p>

                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>

                {/* <!-- modal --> */}
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
                        <h4 className="modal-title">
                          Contact Us for Query Here
                        </h4>
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
                <br />
              </div>
            </div>
          </div>
          <div style={{ padding: "5px" }}></div>
          {/* <!--client 4 --> */}
          <div class="beauty">
            <div class="row">
              <div class="col-lg-4">
                <div class="container">
                  <br />
                  <div
                    id="carouselExampleSlidesOnly"
                    class="carousel slide"
                    data-ride="carousel"
                    data-interval="false"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src="./images/client/ss1.png"
                          class="d-block w-100"
                          alt="Slide 1"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss2.png"
                          class="d-block w-100"
                          alt="Slide 2"
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src="./images/client/ss3.png"
                          class="d-block w-100"
                          alt="Slide 3"
                        />
                      </div>
                    </div>
                    <a
                      class="carousel-control-prev"
                      href="#carouselExampleSlidesOnly"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only text-danger">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#carouselExampleSlidesOnly"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only text-danger">Next</span>
                    </a>
                    <br />
                  </div>
                </div>
              </div>

              <div class="col-lg-8">
                <h5 class="bp">
                  <b>S.S Furniture</b>
                </h5>
                <p class="bp1">
                  Behind Agrasen Metro Station, Near Blue Daimond School, Jyoti
                  Nagar, Nagpur.
                </p>
                <p class="bp2" style={{ color: "grey" }}>
                  Manufacturers of Hydraulic Chairs & All Types of Repairing
                  Works
                </p>

                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <i
                  class="fa fa-star"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>

                {/* <!-- **************modal******************* --> */}
                <div class="container mt-3">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    <i
                      class="fa fa-comments"
                      style={{ fontSize: "20px", color: "red" }}
                    ></i>
                    <b> chat</b>
                  </button>
                </div>

                {/* <!-- The Modal --> */}
                <div class="modal" id="myModal">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      {/* <!-- Modal Header --> */}
                      <div class="modal-header">
                        <h4 class="modal-title">Nagpurdial</h4>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                        ></button>
                      </div>

                      {/* <!-- Modal body --> */}
                         <div className="modal-body">
            <h6>Contact Us for Query here</h6>
               
         </div>
   
         {/* <!-- Modal footer --> */}
         <div className="modal-footer">
         <a href="https://api.whatsapp.com/send?phone=918080724453&text=tanushri."  target="_blank" >  <button type="button" className="btn btn-danger" data-bs="modal">Contact</button></a>
         </div>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>

          <div style={{ padding: "5px" }}></div>

          {/* <!-- footer--> */}
          <footer>
            <div class="row">
              <div class="col-lg-4">
                <p>
                  <strong>Our Links:</strong>
                </p>
                <p>
                  <strong>
                    <a
                      href="index.html"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Home
                    </a>
                  </strong>
                </p>
                <p>
                  <strong>
                    <a
                      href="advertise.html"
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
              <div class="col-lg-4">
                <p>
                  <strong>Contact Us:</strong>
                </p>
                <p>Phone: +91-123456789</p>
                <p>E-mail: example@email.com</p>
              </div>
              <div class="col-lg-4">
                <div class="social-media">
                  <p>
                    <strong>Follow us on:</strong>
                  </p>
                  <a href="#">
                    <i
                      class="fa fa-facebook-square mx-2"
                      style={{ fontSize: "30px", color: "blue" }}
                    ></i>
                  </a>
                  <a href="#">
                    <i
                      class="fa fa-instagram mx-2"
                      style={{ fontSize: "30px", color: "red" }}
                    ></i>
                  </a>
                  <a href="#">
                    <i
                      class="fa fa-linkedin-square mx-2"
                      style={{ fontSize: "30px", color: "blue" }}
                    ></i>
                  </a>
                  <a href="#">
                    <i
                      class="fa fa-youtube-square mx-2"
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
    </div>
  );
}

export default HomeFuriture;
