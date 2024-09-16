import React from "react";
import "../App.css";

function CorporateMedia() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <hr />
        <div style={{ padding: "2px" }}></div>
        <div className="banner48">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>

        <hr />

        <div className="media">
          <div className="container mt-3">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="/corporatemedia">
                  Media(all)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/press">
                  Press
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/video">
                  Videos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hh" href="/report">
                  Consumers Reports
                </a>
                <a className="nav-link h" href="/report">
                  Reports
                </a>
              </li>
            </ul>

            <div style={{ padding: "15px" }}></div>
            <div className="row  mt-3">
              <div className="col-lg-4 p-4 mt-2 media1 mx-3 ">
                <img src="./images/Home services/news2.jpeg" className="igm" />
              </div>
              <div className="col-lg-8 media11 mx-3 p-2 m-2">
                <div className="row">
                  <div className="col-lg-4 p-2 col">
                    <iframe
                      className="vdo"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="col-lg-8 col">
                    <p>Date:04-06-24</p>
                    <p>
                      <b>Earnings Season</b>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 p-2 col">
                    <iframe
                      className="vdo"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="col-lg-8 col">
                    <p>Date:04-06-24</p>
                    <p>
                      <b>Earnings Season</b>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 p-2 col">
                    <iframe
                      className="vdo"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="col-lg-8 col">
                    <p>Date:04-06-24</p>
                    <p>
                      <b>Earnings Season</b>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 p-2 col">
                    <iframe
                      className="vdo"
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="col-lg-8 col">
                    <p>Date:04-06-24</p>
                    <p>
                      <b>Earnings Season</b>
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      className="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div className="col-lg-8 col">
                    <p>Date:04-06-24</p>
                    <p>
                      <b>news paper cutting</b>
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4 p-2 col">
                    <img
                      src="./images/Home services/news.jpg"
                      className="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div className="col-lg-8 col">
                    <p>Date:04-06-24</p>
                    <p>
                      <b>news paper cutting</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "5px" }}></div>
        {/*    
   <!-- footer --> */}
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
                    style={{ fontSize: "30px", color: "red;" }}
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

export default CorporateMedia;
