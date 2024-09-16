import React from "react";
import "../App.css";

function Bike() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div className="banner47">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        {/* Bike Options */}
        <div className="container h">
          <div className="row">
            <div className="col-lg-3">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/bikes-removebg-preview.png"
                  width="20px"
                />
                All Options
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img src="./images/fafa icon/bajaj.jpg" width="20px" />
                Bajaj Bikes
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/mahindra-removebg-preview.png"
                  width="20px"
                />
                Hero Bikes
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/honda2-removebg-preview.png"
                  width="20px"
                />
                Honda Bikes
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img src="./images/fafa icon/yamaha.png" width="20px" />
                Yamaha Bikes
              </a>
            </div>
            <div className="col-lg-3">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img src="./images/fafa icon/royal enfilled.jpg" width="20px" />
                Royal Enfield
              </a>
            </div>
          </div>
        </div>
        {/* Mobile View */}
        <div className="container hh">
          <div className="row">
            <div className="col-lg-6 col-lg-61">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/bikes-removebg-preview.png"
                  width="20px"
                />
                All Options
              </a>
            </div>
            <div className="col-lg-6 col-lg-61">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img src="./images/fafa icon/royal enfilled.jpg" width="20px" />
                Royal Enfield
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-lg-61">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img src="./images/fafa icon/yamaha.png" width="20px" />
                Yamaha
              </a>
            </div>
            <div className="col-lg-6 col-lg-61">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/honda2-removebg-preview.png"
                  width="20px"
                />
                Honda
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-lg-61">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img src="./images/fafa icon/bajaj.jpg" width="20px" />
                Bajaj
              </a>
            </div>
            <div className="col-lg-6 col-lg-61">
              <a href="/bikeservices" style={{ textDecoration: "none" }}>
                <img
                  src="./images/fafa icon/mahindra-removebg-preview.png"
                  width="20px"
                />
                Hero
              </a>
            </div>
          </div>
        </div>
        <hr />
        {/* Popular Categories */}
        <h5>
          <strong>Popular Categories</strong>
        </h5>
        <p style={{ color: "grey", fontSize: "12px" }}>
          Body Massage Centres | Cinema Halls | Schools | Beauty Spas |
          Dermatologists | Hospitals | Malls | Gyms | Beauty Parlours | Estate
          Agents | Banquet Halls | ENT Doctors | Book Shops | Bike On Rent |
          Sexologist Doctors | Neurologists | Gynaecologist & Obstetrician |
          Doctors | Train Ticket Booking Agents | Travel Agents | Paying Guest
          Accommodations | General Physician Doctors | Dentists | Orthopaedic
          Doctors | Chemists | Motor Training Schools | Gastroenterologists |
          Car Rental | Salons Courier Services | Dance Classes | Pathology Labs
          | Taxi Services | Cake Shops | AC Repair & Services | Mobile Phone
          Dealers | Pet Shops | Dmart | Packers And Movers | Psychiatrists |
          Dharamshalas | Urologist Doctors | Bakeries | Bicycle Dealers Coffee
          Shops | Paediatricians | Sonography Centres | Yoga Classes | Hostels
          Cardiologists | Electrical Shops | Skin Care Clinics | Diagnostic
          Centres | Homeopathic Doctors | Physiotherapists | Photo Studios |
          Plumbers | Music Classes | Electricians | Sports Goods Dealers | Shoe
          Dealers | Hair Stylists | Gift Shops | Ophthalmologists | Car Repair &
          Services | Ayurvedic Doctors | Eye Clinics | Restaurants | Carpenters
          | Jewellery Showrooms | Cooks On Hire | Stationery Shops |
          Nephrologists | Caterers Interior Designers | Rehabilitation Center |
          Grocery Stores | Banks ATM | 5 Star Hotels | Hotels | Resorts |
          Plastic Surgeons
        </p>
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

export default Bike;
