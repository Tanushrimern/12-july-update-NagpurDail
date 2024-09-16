import React from "react";
function Report() {
  return (
    <div class="container">
      <div class="container-fluid p-10">
        {/* <!---------- navbar------- --> */}
        <nav className="navbar">
          <div className="logo">
            <a href="/" style={{ textDecoration: "none" }}>
              <img src="logo.png" alt="Logo" />
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="/advertise">
                <i className="fa fa-bullhorn"></i>
                Advertise
              </a>
            </li>
            <li>
              <a href="/listing">
                <i className="fa fa-line-chart"></i>
                Free Listing
              </a>
            </li>
          </ul>
          <div className="login-logout">
            <button type="button" className="btn btn-primary">
            <a href="/login">Login</a> / <a href="/signup">Sign Up</a>
            </button>
          </div>

          {/* <!--user visiable in media query--> */}
          <div className="offcanvas offcanvas-start" id="demo1">
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="row">
                <div className="col-lg-6 ">
                  <h4>
                    <b>Sign-in</b>
                    <img
                      src="./images/fafa icon/usericon.png"
                      alt="userlogin image"
                      style={{ width: "40px", float: "right" }}
                    />
                  </h4>
                </div>
              </div>
              <p>
                <i className="fa fa-language"></i> English
              </p>
              <p>
                <i className="fa fa-user"></i> Customer Service
              </p>
              <p>
                <i className="fa fa-line-chart"></i> List Your Busimess
              </p>
              <p>
                <i className="fa fa-bullhorn"></i> Advertise
              </p>
              <p>
                <i className="fa fa-vcard-o"></i> My Transactions
              </p>
              <p>
                <i className="fa fa-users"></i> Manage Quotes
              </p>
              <p>
                <i className="fa fa-laptop"></i> We are hiring
              </p>
              <p>
                <i className="fa fa-cog"></i> Settings
              </p>
              <p>
                <i className="fa fa-universal-access"></i> Privacy Policy
              </p>
              <p>
                <i className="fa fa-slideshare"></i> Investor Relations
              </p>
              <p>
                <i className="fa fa-plus-square"></i> What's New
              </p>
              <p>
                <i className="fa fa-paperclip"></i> Others
              </p>
              <p>
                <i className="fa fa-user-times"></i> Sign Out
              </p>
            </div>
          </div>
          <li
            data-bs-toggle="offcanvas"
            data-bs-target="#demo1"
            className="hide"
          >
            <img
              src="./images/fafa icon/usericon.png"
              alt="userlogin image"
              style={{ width: "25px" }}
            />
          </li>
        </nav>
        <hr />
        <div style={{ padding: "2px" }}></div>
        <div class="banner48">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>

        <hr />
        <div class="media">
          <div class="container mt-3">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link " href="/corporatemedia">
                  Media(all)
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/press">
                  Press
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Video">
                  Videos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link hh active" href="/report">
                  Consumers Reports
                </a>
                <a class="nav-link h active" href="/report">
                  Reports
                </a>
              </li>
            </ul>

            <div style={{ padding: "15px" }}></div>
            <div class="row  mt-3">
              <div class="col-lg-4 p-4 mt-2 media1 mx-3 ">
                <img src="./images/Home services/news2.jpeg" class="igm" />
              </div>
              <div class="col-lg-8 media11 mx-3 p-2 m-2">
                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/client/master.png"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>Client Review</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/client/master.png"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>Client Review</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/client/master.png"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>Client Review</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 p-2 col">
                    <img
                      src="./images/client/master.png"
                      class="igm1"
                      alt="Carpenter Image"
                    />
                  </div>
                  <div class="col-lg-8 col">
                    <small style={{ fontSize: "15px" }}>
                      <b>Client Review</b>
                    </small>
                    <br />
                    <small style={{ fontSize: "10px" }}>
                      We have a team of qualified and skilled professionals who
                      stay updated about the changing trends to cater to the
                      demands that our clients have.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "5px" }}></div>

        {/* <!--footer --> */}
        <hr />
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

export default Report;
