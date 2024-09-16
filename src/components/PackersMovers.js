import React from "react";

const whatsappContacts = [
  { id: 1, phone: "919604589537", text1: "Ashwini" },
  // Add more contacts as needed
];

const whatsappContacts1 = [
  { id: 2, phone: "918080724453", text2: "Tanushri" },
  // Add more contacts as needed
];

function PackersMovers() {
  const handleContactButtonClick = (phone, text) => {
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(`Hello, ${text}`)}`, '_blank');
  };

  return (
    <div className="container">
      <div className="container-fluid p-10">
        <h5><strong>Nagpur's Top Packers & Movers Services</strong></h5>

        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="./images/client/master.png" className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                      <img src="./images/client/grow your business.png" className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                      <img src="./images/client/mens.png" className="d-block w-100" alt="Slide 3" />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only text-danger">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only text-danger">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h5 className="bp mt-1"><b>No data</b></h5>
              <p className="bp1">No data</p>
              <p className="bp2" style={{ color: "grey" }}>No data</p>
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star-half-full" style={{ fontSize: "26px", color: "#FFC300" }}></i>

              {whatsappContacts.map((contact) => (
                <div key={contact.id} className="col-lg-4">
                  <div className="container mt-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleContactButtonClick(contact.phone, contact.text1)}
                    >
                      <i className="fa fa-comments" style={{ fontSize: "20px", color: "red" }}></i>
                      <b> Chat with {contact.text1}</b>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />

        <div className="beauty">
          <div className="row">
            <div className="col-lg-4">
              <div className="container">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="false">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="./images/client/master.png" className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                      <img src="./images/client/grow your business.png" className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                      <img src="./images/client/mens.png" className="d-block w-100" alt="Slide 3" />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only text-danger">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only text-danger">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h5 className="bp mt-1"><b>No data</b></h5>
              <p className="bp1">No data</p>
              <p className="bp2" style={{ color: "grey" }}>No data</p>
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star" style={{ fontSize: "26px", color: "#FFC300" }}></i>
              <i className="fa fa-star-half-full" style={{ fontSize: "26px", color: "#FFC300" }}></i>

              {whatsappContacts1.map((contact) => (
                <div key={contact.id} className="col-lg-4">
                  <div className="container mt-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleContactButtonClick(contact.phone, contact.text2)}
                    >
                      <i className="fa fa-comments" style={{ fontSize: "20px", color: "red" }}></i>
                      <b> Chat with {contact.text2}</b>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />

        {/* Footer */}
        <footer>
          <div className="row">
            <div className="col-lg-4">
              <p><strong>Our Links:</strong></p>
              <p><strong><a href="/" style={{ textDecoration: "none", color: "black" }}>Home</a></strong></p>
              <p><strong><a href="/advertise" style={{ textDecoration: "none", color: "black" }}>Advertise</a></strong></p>
              <p><strong><a href="/about" style={{ textDecoration: "none", color: "black" }}>About Us</a></strong></p>
              <p><strong><a href="/listing" style={{ textDecoration: "none", color: "black" }}>Free Listing</a></strong></p>
            </div>
            <div className="col-lg-4">
              <p><strong>Contact Us:</strong></p>
              <p>Phone: +91-123456789</p>
              <p>E-mail: example@email.com</p>
            </div>
            <div className="col-lg-4">
              <div className="social-media">
                <p><strong>Follow us on:</strong></p>
                <a href="#"><i className="fa fa-facebook-square mx-2" style={{ fontSize: "30px", color: "blue" }}></i></a>
                <a href="#"><i className="fa fa-instagram mx-2" style={{ fontSize: "30px", color: "red" }}></i></a>
                <a href="#"><i className="fa fa-linkedin-square mx-2" style={{ fontSize: "30px", color: "blue" }}></i></a>
                <a href="#"><i className="fa fa-youtube-square mx-2" style={{ fontSize: "30px", color: "red" }}></i></a>
              </div>
            </div>
          </div>
        </footer>
        <hr />
        <div>
          <p className="copyright">
            <center><strong>Copyright © 2024</strong></center>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PackersMovers;
