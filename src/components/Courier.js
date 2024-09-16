import React from "react";
function Courier() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div className="banner24">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>

        <div style={{ padding: "2px" }}></div>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-lg-41">
              <a href="/courierServices" className="icons-img">
                <img src="./images/fafa icon/all.png" className="icons-img" />
                All Types Courier
              </a>
            </div>
            <div className="col-lg-4 col-lg-41">
              <a href="courierServices" className="icons-img">
                <img src="./images/fafa icon/bulk.png" className="icons-img" />
                Bulk Courier
              </a>
            </div>
            <div className="col-lg-4 col-lg-41 hh">
              <a href="/courierServices" className="icons-img">
                <img src="./images/fafa icon/local.png" className="icons-img" />
                Local Courier
              </a>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-4 col-lg-41">
              <a href="/courierServices" className="icons-img">
                <img
                  src="./images/fafa icon/national.png"
                  className="icons-img"
                />
                National Courier
              </a>
            </div>
            <div className="col-lg-4 col-lg-41 ">
              <a href="/courierServices" className="icons-img">
                <img
                  src="./images/fafa icon/international.png"
                  className="icons-img"
                />
                International{" "}
              </a>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 col-lg-61 h">
              <a href="/courierServices" className="icons-img">
                <img src="./images/fafa icon/local.png" className="icons-img" />
                Local Courier
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

        {/* <!-- footer --> */}
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

export default Courier;
