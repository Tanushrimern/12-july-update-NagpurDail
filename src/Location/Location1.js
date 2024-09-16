import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Modal, Carousel } from "react-bootstrap";

const Location1 = () => {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/search", {
        locationsName: query,
      });
      setLocations(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const openModal = (location) => {
    setSelectedLocation(location);
    setModalShow(true);
  };

  const closeModal = () => {
    setSelectedLocation(null);
    setModalShow(false);
  };

  return (
    <Container>
      <h1 className="mt-4 mb-4">Location Search</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Locations"
          // className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary ml-2" onClick={handleSearch}>
          Search
        </button>
      </div>

      <Row>
        {locations.map((location) => (
          <Col lg={12} key={location._id}>
            <div className="beauty">
              <br />
              <Row>
                <Col lg={4}>
                  {/* Carousel */}
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="./images/client/master.png"
                        alt="Slide 1"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="./images/client/grow your business.png"
                        alt="Slide 2"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="./images/client/mens.png"
                        alt="Slide 3"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>
                <Col lg={8}>
                  {/* Description, Title, Button, Price */}
                  <div className="detail-info ">
                    <h6>
                      {location.name}
                    </h6>
                    <h4 style={{ color: "green", fontWeight: "bold" }}>{location.description}</h4>
                    <p>Price: ${location.price}</p>
                    <Button
                      variant="primary"
                      onClick={() => openModal(location)}
                    >
                      Chat
                    </Button>
                  </div>
                </Col>
              </Row>
              <br />
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal for showing detailed information */}
      <Modal show={modalShow} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedLocation && selectedLocation.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Contact Us for Query here</h6>
          {/* Replace the link with actual contact link */}
          <a
            href={`https://api.whatsapp.com/send?phone=918080724453&text=${
              selectedLocation && selectedLocation.name
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="danger">Contact</Button>
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Location1;
