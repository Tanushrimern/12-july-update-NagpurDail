import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact1 = ({ contact, onClose }) => {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  const host = "http://localhost:3000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${host}/api/auth/contact1`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credential),
      });
      const json = await response.json();
      if (json.success) {
        // Assuming data is saved successfully
        alert("Data saved successfully!");
        
        // Construct WhatsApp message
        const message = `Hello, I am ${credential.name}. My email is ${credential.email}.`; // Customize the message as needed

        // Construct WhatsApp URL
        const whatsappURL = `https://api.whatsapp.com/send?phone=${contact.phone}&text=${encodeURIComponent(message)}`;

        // Redirect to WhatsApp
        window.location.href = whatsappURL;

        onClose(); // Close Contact1 modal or section
      } else {
        alert("Failed to submit form. Please fill in all fields correctly.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredential((prevCredential) => ({
      ...prevCredential,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="p-3">
        <form onSubmit={handleSubmit}>
          <div className="row mx-2">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                name="name"
                value={credential.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={credential.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div className="row mx-2">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-2">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact1;
