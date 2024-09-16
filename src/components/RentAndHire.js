import React from "react";
import "../App.css";
function RentAndHire() {
  return (
    <div class="container">
      <div class="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div class="banner3 ">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>

        <div style={{ padding: "2px" }}></div>

        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-lg-41">
              <a href="/rentservice" class="icons-img ">
                <img src="./images/fafa icon/mini bus.png" class="icons-img" />
                Mini Bus on Rent
              </a>
            </div>
            <div class="col-lg-4 col-lg-41">
              <a href="/rentservice" class="icons-img ">
                <img src="./images/fafa icon/truck.png" class="icons-img" />
                Tempos on Rent
              </a>
            </div>
            <div class="col-lg-4 col-lg-41">
              <a href="/rentservice" class="icons-img hh">
                <img src="./images/fafa icon/customer.png" class="icons-img" />
                Constumer Rent
              </a>
            </div>
          </div>

          <div class="row ">
            <div class="col-lg-4 col-lg-41">
              <a href="/rentservice" class="icons-img hh">
                <img src="./images/fafa icon/truck.png" class="icons-img" />
                Tempos on Rent
              </a>
            </div>
            <div class="col-lg-4 col-lg-41">
              <a href="/rentservice" class="icons-img hh">
                <img src="./images/fafa icon/mini bus.png" class="icons-img" />
                Mini Bus on Rent
              </a>
            </div>
            <div class="col-lg-4 col-lg-41">
              <a href="/rentservice" class="icons-img hh">
                {" "}
                <img src="./images/fafa icon/ac.png" class="icons-img" />
                AC on Rent
              </a>
            </div>
          </div>
          <div class="row ">
            <div class="col-lg-6 col-lg-61 h">
              <a href="/rentservice" class="icons-img">
                <img src="./images/fafa icon/customer.png" class="icons-img" />
                Constumer Rent
              </a>
            </div>
            <div class="col-lg-6 col-lg-61 h">
              <a href="/rentservice" class="icons-img">
                <img src="./images/fafa icon/ac.png" class="icons-img" />
                AC on Rent
              </a>
            </div>
          </div>

          <div class="row ">
            <div class="col-lg-6 col-lg-61 h">
              <a href="/rentservice" class="icons-img">
                {" "}
                <img src="./images/fafa icon/caar.png" class="icons-img" />
                Car on Rent
              </a>
            </div>
            <div class="col-lg-6 col-lg-61 h">
              <a href="/rentservice" class="icons-img">
                <img src="./images/fafa icon/buss.png" class="icons-img" />
                Bus on Rent
              </a>
            </div>
          </div>
        </div>

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

export default RentAndHire;
