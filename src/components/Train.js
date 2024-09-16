import React from "react";

function Train() {
  return (
    <div className="container">
      {/* <!-- *************second navbar****************************** --> */}
      <nav className="navbar navbar-expand-lg navbar-light ">
        {/* <!--  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">--> */}
        {/* <!--  <span className="navbar-toggler-icon"></span>-->
    <!--</button>--> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ">
              <a className="nav-link" href="/fligh">
                <b>Flight</b>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/hotel">
                <b>Hotel</b>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/Bus">
                <b>Bus</b>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/Train">
                <b>Train</b>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Cab">
                <b>Cab</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Visa">
                <b>Visa Assistance</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Internationalsim">
                <b>International Sim Card</b>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!-- **********************************banner******************************************** --> */}
      <div className="banner ">
        <div style={{ padding: "10px" }}></div>
      </div>

      {/* <!-- ******************************************************************************************************** --> */}
      <div style={{ padding: "10px" }}></div>

      <div>
        <h5>
          <strong>
            Book Train Online with{" "}
            <span
              style={{
                color: "#FF3F07",
                fontSize: "20px",
                fontFamily: "ArialBlack",
              }}
            >
              Nagpur{" "}
            </span>
            Dial{" "}
          </strong>
        </h5>
        <p style={{ color: "grey", fontSize: "15px" }}>
          Welcome to Nagpur Dial, your one-stop destination for booking train
          tickets online with convenience and efficiency. Skip the long lines
          and tedious ticket counters – with Nagpur Dial, you can effortlessly
          plan your rail journey, select your preferred seats, and secure your
          tickets from the comfort of your home or on-the-go.
        </p>
      </div>

      {/* 
         <!-- *******************************************client 1************************************* --> */}
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
                      src="./images/client/ss1.png"
                      className="d-block w-100"
                      alt="Slide 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./images/client/ss2.png"
                      className="d-block w-100"
                      alt="Slide 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./images/client/ss3.png"
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
            <h5 className="bp">
              <b>T3 Tourism Tours and Travels agency in Nagpur</b>
            </h5>
            <p>
              Swamy Samarth Commercial Complex, S/409, 4th floor, Dharampeth,
              Nagpur, Maharashtra 440010.
            </p>
            <p style={{ color: "grey" }}>
              Flight Ticket Corporate Ticket, Luxury Vacation, Honeymoon,
              Cruises, Visa, Forex, Travel insurance, Chartered plane, Private
              yacht, Concierge, Group Tours, Jungle tours, Budget tours,
              Religious tours,
            </p>

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
              className="fa fa-star"
              style={{ fontSize: "26px", color: "#FFC300" }}
            ></i>

            {/* <!-- **************modal******************* --> */}
            <div className="container mt-3">
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
                <b> chat</b>
              </button>
            </div>

            {/* <!-- The Modal --> */}
            <div className="modal" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                    <h4 className="modal-title">Nagpurdial</h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    <h4>Name</h4>
                    <h4>mobile no</h4>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>

      {/* <!-- *******************************************client 2************************************* --> */}
      <div className="beauty">
        <div className="row">
          <div className="col-lg-4">
            <div className="container">
              <br />
              <div
                id="carouselExampleSlidesOnly2"
                className="carousel slide"
                data-ride="carousel"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="./images/client/ss1.png"
                      className="d-block w-100"
                      alt="Slide 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./images/client/ss2.png"
                      className="d-block w-100"
                      alt="Slide 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./images/client/ss3.png"
                      className="d-block w-100"
                      alt="Slide 3"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleSlidesOnly2"
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
                  href="#carouselExampleSlidesOnly2"
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
            <h5 className="bp">
              <b>GHUMANEWALA TRAVEL SERVICES</b>
            </h5>
            <p>
              Plot No. 45, Sugandh, opp. Childrens Traffic Park, Dharampeth,
              Nagpur, Maharashtra 440010
            </p>
            <p style={{ color: "grey", textAlign: "justify" }}>
              Hotels,Tickets,Cruises,MiceTours,Visa Assistance
            </p>
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
              className="fa fa-star"
              style={{ fontSize: "26px", color: "#FFC300" }}
            ></i>

            {/* <!-- **************modal******************* --> */}
            <div className="container mt-3">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                <i
                  className="fa fa-comments"
                  style={{ fontSize: "26px", color: "#FFC300" }}
                ></i>
                <b> chat</b>
              </button>
            </div>

            {/* <!-- The Modal --> */}
            <div className="modal" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                    <h4 className="modal-title">Nagpurdial</h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    <h4>Name</h4>
                    <h4>mobile no</h4>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>

      {/* <!-- *******************************************client 1************************************* --> */}
      <div className="beauty">
        <div className="row">
          <div className="col-lg-4">
            <div className="container">
              <br />
              <div
                id="carouselExampleSlidesOnly3"
                className="carousel slide"
                data-ride="carousel"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="./images/client/ss1.png"
                      className="d-block w-100"
                      alt="Slide 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./images/client/ss2.png"
                      className="d-block w-100"
                      alt="Slide 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./images/client/ss3.png"
                      className="d-block w-100"
                      alt="Slide 3"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleSlidesOnly3"
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
                  href="#carouselExampleSlidesOnly3"
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
            <h5 className="bp">
              <b>DHANLAXMI TOURS AND TRAVELS</b>
            </h5>
            <p>
              Rahul Complex, Wing 1, Block No. 40 Near S.T. Stand, Ganeshpeth ,
              Nagpur
            </p>
            <p style={{ color: "grey" }}>Tours & Travels</p>

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
              className="fa fa-star"
              style={{ fontSize: "26px", color: "#FFC300" }}
            ></i>

            {/* <!-- **************modal******************* --> */}
            <div className="container mt-3">
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
              </button>
              <b> chat</b>
            </div>

            {/* <!-- The Modal --> */}
            <div className="modal" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                    <h4 className="modal-title">Nagpurdial</h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  {/* 
      <!-- Modal body --> */}
                  <div className="modal-body">
                    <h4>Name</h4>
                    <h4>mobile no</h4>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>

      {/* <!-- *********************************************Popular Hotel********************************************** --> */}
      <hr />
      <h5>
        <strong>
          Popular Train Travel Agency in{" "}
          <span style={{ color: "#FF3F07" }}>Nagpur</span>
        </strong>
      </h5>
      <p style={{ color: "grey" }}>
        T3 Tourism Tours and Travels agency in Nagpur |GHUMANEWALA TRAVEL
        SERVICES | DHANLAXMI TOURS AND TRAVELS |T3 Tourism Tours and Travels
        agency in Nagpur |GHUMANEWALA TRAVEL SERVICES | DHANLAXMI TOURS AND
        TRAVELS |T3 Tourism Tours and Travels agency in Nagpur |GHUMANEWALA
        TRAVEL SERVICES | DHANLAXMI TOURS AND TRAVELS |T3 Tourism Tours and
        Travels agency in Nagpur |GHUMANEWALA TRAVEL SERVICES | DHANLAXMI TOURS
        AND TRAVELS |T3 Tourism Tours and Travels agency in Nagpur |GHUMANEWALA
        TRAVEL SERVICES | DHANLAXMI TOURS AND TRAVELS |{" "}
      </p>

      {/* <!-- *************************************************footer********************************************** --> */}
      <hr />
      <footer>
        <div className="row">
          <div className="col-lg-4">
            <p classNameName="social">
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
            <p classNameName="social">
              <strong>Contact Us:</strong>
            </p>
            <p>Phone: +91-123456789</p>
            <p>E-mail: example@email.com</p>
          </div>
          <div className="col-lg-4">
            <div className="social-media">
              <p classNameName="social">
                <strong>Follow us on:</strong>
              </p>
              <a href="#">
                <i
                  className="fa fa-facebook-square mx-2"
                  style={{ fontSize: "30px", color: "blue" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fa fa-instagram mx-2"
                  style={{ fontSize: "30px", color: "blue" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fa fa-linkedin-square mx-2"
                  style={{ fontSize: "30px", color: "blue" }}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fa fa-youtube-square mx-2"
                  style={{ fontSize: "30px", color: "blue" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <div>
        <p classNameName="copyright">
          <center>
            <strong>Copyright © 2024</strong>
          </center>
        </p>
      </div>
    </div>
  );
}

export default Train;
