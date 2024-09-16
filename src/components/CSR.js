import React from "react";
function CSR() {
  return (
    <div class="container">
      <div class="container-fluid p-10">
        <hr />
        <div style={{ padding: "2px" }}></div>
        <div class="banner48">
          <div style={{ padding: "10px" }}></div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <hr />

        {/* <!--<div class="container">--> */}
        <p>
          <strong>NagpurDial</strong>
        </p>
        <p>
          NagpurDial, embraces Corporate Social Responsibility (CSR) as a core
          value integral to its operations. With a deep commitment to the local
          community and environment, NagpurDial's CSR initiatives aim to make a
          positive impact across various spheres.
        </p>
        <p>
          <b>Community Development:</b> NagpurDial actively engages in community
          development projects, focusing on areas such as education, healthcare,
          and infrastructure. It collaborates with local NGOs and government
          bodies to identify and address pressing community needs, striving to
          enhance the quality of life for residents in Nagpur and surrounding
          areas.
          <br />
          <b>Education Enhancement:</b>Recognizing the pivotal role of education
          in societal progress, NagpurDial invests in initiatives aimed at
          promoting literacy and skill development. It sponsors educational
          programs, scholarships, and vocational training initiatives to empower
          individuals with the knowledge and skills needed for personal and
          professional growth.
          <br />
          <b>Environmental Sustainability:</b> NagpurDial is committed to
          environmental sustainability and adopts eco-friendly practices across
          its operations. It actively promotes initiatives aimed at
          conservation, waste reduction, and renewable energy adoption. Through
          tree planting drives, waste management programs, and energy-efficient
          initiatives, NagpurDial strives to minimize its environmental
          footprint and contribute to a greener future.
          <br />
          <b>Employee Welfare:</b> NagpurDial values its employees and
          prioritizes their welfare through various CSR initiatives. It offers
          employee volunteering programs, encourages employee participation in
          community service activities, and provides support for personal
          development and well-being initiatives. By fostering a culture of
          social responsibility among its workforce, NagpurDial creates a
          positive impact both within and beyond the organization.
          <br />
          <b>Digital Inclusion:</b> As a telecommunications company, NagpurDial
          recognizes the importance of digital inclusion in today's
          interconnected world. It initiates projects aimed at bridging the
          digital divide by providing access to digital resources and technology
          training in underserved communities. Through initiatives such as
          digital literacy programs and access to affordable internet services,
          NagpurDial empowers individuals and communities to harness the
          transformative power of technology.
        </p>
        {/* <!--</div>--> */}

        <div style={{ padding: "5px" }}></div>

        {/* <!-- *****************************footer************************************** --> */}
        <footer>
          <div class="row">
            <div class="col-lg-4">
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
            <div class="col-lg-4">
              <p>
                <strong>Contact Us:</strong>
              </p>
              <p>Phone: +91-123456789</p>
              <p>E-mail: example@email.com</p>
            </div>
            <div class="col-lg-4">
              <div class="social-media">
                <p>
                  <strong>Follow us on:</strong>
                </p>
                <a href="#">
                  <i
                    class="fa fa-facebook-square"
                    style={{ fontSize: "30px", color: "blue" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    class="fa fa-instagram"
                    style={{ fontSize: "30px", color: "red" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    class="fa fa-linkedin-square"
                    style={{ fontSize: "30px", color: "blue" }}
                  ></i>
                </a>
                <a href="#">
                  <i
                    class="fa fa-youtube-square"
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

export default CSR;
