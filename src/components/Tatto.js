import React from 'react'
function Tatto() {
  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div style={{ padding: "2px" }}></div>
        <div className="banner19">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        {/* Tattoo Services */}
        <h5>
          <strong>Nagpur's Top Tattoo Services</strong>
        </h5>
        <div style={{ padding: "2px" }}></div>
        {/* Tattoo Artists */}
        <div className="beauty">
          <div className="row">
            {/* Tattoo Artist Card 1 */}
            <div className="col-lg-4">
              <div className="container">
                <br />
                {/* Carousel */}
                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./images/client/master.png"
                        className="d-block w-100"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/grow your business.png"
                        className="d-block w-100"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./images/client/mens.png"
                        className="d-block w-100"
                        alt="Slide 3"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleSlidesOnly"
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
                    href="#carouselExampleSlidesOnly"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-danger">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              {/* Tattoo Artist Details */}
              <h5 className="bp mt-1">
                <b>Black9 Tattoo & Piercing Studio</b>
              </h5>
              <p className="bp1">
                Chhatrapati Square, Wardha Rd, near by Sai Mandir, Nagpur,
                Maharashtra 440015
              </p>
              <p className="bp2" style={{ color: "grey" }}>
                Tattoo
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
                className="fa fa-star-half-full"
                style={{ fontSize: "26px", color: "#FFC300" }}
              ></i>
              {/* Modal */}
              <div className="container mt-1">
                <button
                  type="button"
                  className="btn btn-primary "
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
              {/* Chat Modal */}
              <div className="modal" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Nagpurdial</h4>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>
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
            </div>
          </div>
        </div>
        {/* Similar cards for other tattoo artists */}
      </div>
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
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  About Us
                </a>
              </strong>
            </p>
            <p>
              <strong>
                <a
                  href="listing.html"
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
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Tatto
