import React, { useState } from "react";
import "../App.css";

const Location = () => {
  const initialLocations = [
    {
      name: "Sitaburdi",
      businesses: ["Hardware", "Software", "Electronics", "Telecommunication Hardware", "Software", "Electronics", "Telecommunication"],
    },
    {
      name: "Manewada",
      businesses: ["Hardware", "Software", "Electronics", "Telecommunication","Hardware", "Software", "Electronics", "Telecommunication"],
    },
    {
      name: "Dharampeth",
      businesses: ["Hardware", "Software", "Electronics", "Telecommunication","Hardware", "Software", "Electronics", "Telecommunication"],
    },
    {
      name: "Mankapur",
      businesses: ["Hardware", "Software", "Electronics", "Telecommunication","Hardware", "Software", "Electronics", "Telecommunication"],
    },
  ];

  const [locations, setLocations] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredLocations = initialLocations.filter((location) =>
      location.name.toLowerCase().includes(value)
    );
    setLocations(filteredLocations);
  };

  return (
    <div className="container">
      <div className="container-fluid p-10">
        <div className="accordion-container search-location">
          <input
            type="text"
            name="search"
            className="form-control"
            placeholder="Search locations..."
            value={searchTerm}
            onChange={handleSearch}
          />

          {searchTerm.length > 0 ? (
            locations.length > 0 ? (
              locations.map((location, index) => (
                <div key={index}>
                  <button
                    className={`accordion ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {location.name}
                  </button>
                  <div
                    className="panel"
                    style={{
                      maxHeight: activeIndex === index ? "200px" : "0px",
                    }}
                  >
                    <div className="panel-content">
                      <p>Businesses in {location.name}</p>
                      <ul>
                        {location.businesses.map((business, idx) => {
                          let link;
                          if (business === "Software") {
                            link = "/software";
                          } else if (business === "Hardware") {
                            link = "/hardware";
                          } else {
                            link = `/${business.toLowerCase()}${idx + 1}`;
                          }
                          return (
                            <li key={idx}>
                              <a href={link}>{business}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No locations found.</p>
            )
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;
