import React from "react";
import "../App.css";
function Listing() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        {/* <!--------------------------------- navbar--------------------------------- --> */}
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
        <div style={{padding:"5px"}}></div>
        <hr className="hh" />
        <h5 className="hh">
          <b>List Your Business</b>
          <span style={{ color: "blue" }}>
            <b> for FREE</b>
          </span>
        </h5>
        <h6 className="hh">Advertise with NagpurDial +91-1234567896</h6>
        <h6 className="hh">Nagpur's No. 1 Search Engine</h6>
        <hr className="hh" />

        <div className="row hh">
          <div className="col-lg-6">
            <h6>
              {" "}
              <i
                className="fa fa-check"
                style={{ fontSize: "20px", color: "green" }}
              ></i>
              <b> Get Discovered and Create Your Online Business</b>{" "}
            </h6>
            <h6>
              {" "}
              <i
                className="fa fa-check"
                style={{ fontSize: "20px", color: "green" }}
              ></i>
              <b>Showcase Your Product and Service Offerings</b>{" "}
            </h6>
            <h6>
              {" "}
              <i
                className="fa fa-check"
                style={{ fontSize: "20px", color: "green" }}
              ></i>
              <b>Respond to Customer Reviews and Questions </b>
            </h6>
          </div>
          <div className="col-lg-6">
            <img src="./images/client/grow your business.png" width="180px" />
          </div>
        </div>
        <hr className="hh" />
        <div style={{ padding: "5px" }}></div>
        <h5 className="hh">
          <b style={{ color: "red" }}>
            Get a FREE Business Listing in 3 Simple Steps
          </b>
        </h5>

        <div className="row hh">
          <div className="col-lg-3">
            <img src="./images/fafa icon/Create Account.png" width="150px" />
            <p>Step 1</p>
            <h5>
              <b>Create Acount</b>
            </h5>
            <p>Enter your mobile number to get start</p>
          </div>
          <div className="col-lg-1">
            <img src="./images/fafa icon/arrow.png" width="40px" />
          </div>
          <div className="col-lg-3">
            <img src="./images/fafa icon/details.png" width="150px" />
            <p>Step 2</p>
            <h5>
              <b>Add Business Details</b>
            </h5>
            <p>Add email,business name, and photos</p>
          </div>
          <div className="col-lg-1">
            <img src="./images/fafa icon/arrow.png" width="40px" />
          </div>
          <div className="col-lg-4">
            <img src="./images/fafa icon/Select Categories.png" width="150px" />
            <p>Step 3</p>
            <h5>
              <b>Select Categories</b>
            </h5>
            <p>Add relevant categories to your free listing page</p>
          </div>
        </div>

        <div className="h">
          <hr />
          <h5>
            <b>List Your Business</b>
            <span style={{color:" blue"}}>
              <b> for FREE</b>
            </span>
          </h5>
          <small>
            Advertise with NagpurDial +91-1234567896 Nagpur's No. 1 Search
            Engine
          </small>
          <hr />

          {/* <!--<div className="container hide">--> */}
          <div className="row ">
            <div className="col-lg-6 col-lg-61">
              <p>
                <i
                  className="fa fa-check"
                  style={{ fontSize: "10px", color: "green" }}
                ></i>
                <b>Get Discovered and Create Your Online Business</b>
              </p>
              <p>
                {" "}
                <i
                  className="fa fa-check"
                  style={{ fontSize: "10px", color: "green" }}
                ></i>
                <b>Showcase Your Business Product and Service Offerings</b>{" "}
              </p>
              <p>
                {" "}
                <i
                  className="fa fa-check"
                  style={{ fontSize: "10px", color: "green" }}
                ></i>
                <b>Respond to Customer Reviews and Questions </b>
              </p>
            </div>

            <div className="col-lg-6 col-lg-61">
              <img src="./images/client/grow your business.png" width="120px" />
            </div>
          </div>
          <hr />
          <h6>
            <b style={{ color: "red" }}>
              Get a FREE Business Listing in 3 Simple Steps
            </b>
          </h6>
          <div className="row ">
            <div className="col-lg-4 col-lg-41">
              <img src="./images/fafa icon/Create Account.png" width="120px" />
            </div>
            <div className="col-lg-4 col-lg-41">
              <p>
                <b>
                  Step-1:
                  <br />
                  Create Acount
                </b>
              </p>
              <p>Enter mobile number to get start free Listing</p>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 col-lg-61">
              <img src="./images/fafa icon/details.png" width="120px" />
            </div>
            <div className="col-lg-6 col-lg-61">
              <p>
                <b>
                  Step-2:
                  <br />
                  Add Business Details
                </b>
              </p>
              <p>Add your email,business name, and photos</p>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 col-lg-61">
              <img
                src="./images/fafa icon/Select Categories.png"
                width="120px"
              />
            </div>
            <div className="col-lg-6 col-lg-61">
              <p>
                <b>
                  Step-3:
                  <br />
                  Select Categories
                </b>
              </p>
              <p>Add relevant categories to free listing pages</p>
            </div>
          </div>
        </div>
        {/* <!-- /************************** --> */}

        <hr />
        <h5>
          <strong>Popular Categories</strong>
        </h5>
        <p style={{ color: "grey", fontSize: "12px" }}>
          Body Massage Centres | Cinema Halls | Schools | Beauty Spas |
          Dermatologists | Hospitals | Malls | Gyms | Beauty Parlours | Estate
          Agents | Banquet Halls | ENT Doctors | Book Shops | Bike On Rent |
          Sexologist Doctors | Neurologists | Gynaecologist | & Obstetrician |
          Doctors |Train Ticket| Booking Agents| Travel Agents| Paying Guest
          Accommodations| General Physician Doctors| Dentists| Orthopaedic
          Doctors| Chemists| Motor Training Schools| Gastroenterologists |Car
          Rental| Salons Courier Services |Dance Classes| Pathology Labs| Taxi
          Services| Cake Shops| AC Repair & Services| Mobile Phone| Dealers| Pet
          Shops | Dmart| Packers And Movers| Psychiatrists| Dharamshalas|
          Urologist Doctors| Bakeries | Bicycle | Dealers Coffee Shops|
          Paediatricians |Sonography Centres | Yoga Classes| Hostels
          Cardiologists| Electrical Shops| Skin Care Clinics | Diagnostic
          Centres| Homeopathic Doctors | Physiotherapists | Photo Studios |
          Plumbers |Music Classes| Electricians| Sports |Goods Dealers| Shoe
          Dealers| Hair Stylists| Gift Shops | Ophthalmologists | Car Repair &
          Services |Ayurvedic Doctors| Eye Clinics| Restaurants| Carpenters|
          Jewellery| Showrooms |Cooks On Hire |Stationery Shops| Nephrologists
          |Caterers Interior Designers| Rehabilitation Center | Grocery Stores
          |Banks ATM |5 Star Hotels |Hotels |Resorts |Plastic Surgeons
        </p>

        <div className="container">
          <div className="social-media">
            <p className="social">
              <strong
                style={{
                  fontSize: "20px",
                  fontFamily: "Source Sans Pro, Arial, sans-serif",
                }}
              >
                Follow us on:
              </strong>

              <a href="#">
                <i
                  className="fa fa-facebook-square mx-1"
                  style={{
                    fontSize:"20px", color:"blue"}}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fa fa-instagram mx-1"
                  style={{
                    fontSize:"20px", color:"red"}}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fa fa-linkedin-square mx-1"
                  style={{
                    fontSize:"20px", color:"blue"}}
                ></i>
              </a>
              <a href="#">
                <i
                  className="fa fa-youtube-square mx-1"
                  style={{
                    fontSize:"20px", color:"red"}}
                ></i>
              </a>
            </p>
            <p style={{ color: "grey", fontSize: "12px" }}>
              Nagpur Dial it is just a Website (Website Name) design and
              developed by PSK Technologies Pvt. Ltd. IT Company Nagpur
              Maharashtra (all Rights About Nagpur dial website Reserved at PSK
              Technologies Pvt. Ltd.) it is Nagpur Local Businesses And Services
              Search engine (नागपुर का अपना लोकल सर्च इंजन) it provides local
              search related services to users and it helps to connect business
              to business within Nagpur. through website & mobile App (Android
              Web View). PSK Technologies Motive is to give fast services to
              connect users to businesses and Business to Business
            </p>

            <p style={{ color: "grey", fontSize: "12px" }}>
              More Information about PSK Technologies pvt. Ltd. PSK Technologies
              IT firm started in 2011 by Mr. Prashant Kadhao, who has the vast
              experience in IT & Management field around 14 years. Later on
              converted in it IT Company in the year 2019 as PSK Technolgies
              Pvt. Ltd. (CIN U72900MH2019PTC324858) Since its inception, “PSK
              Technologies is dedicatedly engaged in providing services of
              highest className to our esteemed clients/customers. Our dedicated
              team has been working for last 10 years and our objective is to
              give “Complete IT Solutions.” Our “Principle” is to give “Solution
              Based Services”. A team of certified IT Professionals who have
              expertise in Digital Marketing , Website Development & Computer
              Teaching & Software Development & Personal Computer hardware,
              Networking and software technologies.
            </p>
          </div>
        </div>

        {/* <!-- * --> */}
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

export default Listing;
