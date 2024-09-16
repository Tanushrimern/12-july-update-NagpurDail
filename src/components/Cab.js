import React from 'react';
import '../App.css'
function Cab() {
  return (
    <div className="container">
      
      {/* second navbar */}
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ">
              <a className="nav-link" href="/fight"><b>Flight</b></a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/hotel"><b>Hotel</b></a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/bus"><b>Bus</b></a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/train"><b>Train</b></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/cab"><b>Cab</b><span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/visa"><b>Visa Assistance</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/international"><b>International Sim Card</b></a>
            </li>
          </ul>
        </div>
      </nav>
      {/* banner */}
      <div className="banner">
        <div style={{ padding: '10px' }}></div>
      </div>
      {/*  */}
      <div style={{ padding: '10px' }}></div>
      <div>
        <h5><strong>Top Cool Cab Services in <span style={{ color: '#FF3F07', fontSize: '20px', fontFamily: 'Arial Black' }}>Nagpur</span></strong></h5>
        <p style={{ color: 'grey', fontSize: '15px' }}>Are you looking for hassle-free transportation solutions in Nagpur? Look no further! Nagpur is home to a variety of reputable cool cab services that offer comfortable and convenient travel experiences for both locals and visitors alike. From airport transfers to city tours, these top cool cab services in Nagpur ensure a smooth and enjoyable journey from start to finish.</p>
      </div>
      {/* client 1 */}
      <div className="beauty">
        <div className="row">
          <div className="col-lg-4">
            <div className="container">
              <br />
              <div id="carouselExampleSlidesOnly1" className="carousel slide" data-ride="carousel" data-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="./images/client/ss1.png" className="d-block w-100" alt="Slide 1" />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/client/ss2.png" className="d-block w-100" alt="Slide 2" />
                  </div>
                  <div className="carousel-item">
                    <img src="./images/client/ss3.png" className="d-block w-100" alt="Slide 3" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleSlidesOnly1" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only text-danger">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleSlidesOnly1" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only text-danger">Next</span>
                </a>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <h5 className="bp"><b>T3 Tourism Tours and Travels agency in Nagpur</b></h5>
            <p>Swamy Samarth Commercial Complex, S/409, 4th floor, Dharampeth, Nagpur, Maharashtra 440010.</p>
            <p style={{ color: 'grey' }}>Flight Ticket Corporate Ticket, Luxury Vacation, Honeymoon, Cruises, Visa, Forex, Travel insurance, Chartered plane, Private yacht, Concierge, Group Tours, Jungle tours, Budget tours, Religious tours,</p>
            <i className="fa fa-star" style={{ fontSize: '26px', color: '#FFC300' }}></i>
            <i className="fa fa-star" style={{ fontSize: '26px', color: '#FFC300' }}></i>
            <i className="fa fa-star" style={{ fontSize: '26px', color: '#FFC300' }}></i>
            <i className="fa fa-star" style={{ fontSize: '26px', color: '#FFC300' }}></i>
            <i className="fa fa-star" style={{ fontSize: '26px', color: '#FFC300' }}></i>
            {/* modal */}
            <div className="container mt-3">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                <i className="fa fa-comments" style={{ fontSize: '20px', color: 'red' }}></i>
                <b> chat</b>
              </button>
            </div>
            {/* The Modal */}
            <div className="modal" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content">
                  {/* Modal Header */}
                  <div className="modal-header">
                    <h4 className="modal-title">Nagpurdial</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  {/* Modal body */}
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
      {/* *******************************************client 2************************************* */}
      {/* Add similar structure for other clients */}
      {/* Popular Hotel */}
      <hr />
      <h5><strong>Popular  Travel Agency  in <span style={{ color: '#FF3F07' }}>Nagpur</span></strong></h5>
      <p style={{ color: 'grey' }}>T3 Tourism Tours and Travels agency in Nagpur  |GHUMANEWALA TRAVEL SERVICES  | DHANLAXMI TOURS AND TRAVELS |T3 Tourism Tours and Travels agency in Nagpur  |GHUMANEWALA TRAVEL SERVICES  | DHANLAXMI TOURS AND TRAVELS |T3 Tourism Tours and Travels agency in Nagpur  |GHUMANEWALA TRAVEL SERVICES  | DHANLAXMI TOURS AND TRAVELS |T3 Tourism Tours and Travels agency in Nagpur  |GHUMANEWALA TRAVEL SERVICES  | DHANLAXMI TOURS AND TRAVELS |T3 Tourism Tours and Travels agency in Nagpur  |GHUMANEWALA TRAVEL SERVICES  | DHANLAXMI TOURS AND TRAVELS |</p>
      {/* footer */}
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
  );
}

export default Cab;
