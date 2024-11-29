// frontend/src/pages/Contact.js

import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    gender: "Gender", // Default value for gender
  });

  const [message, setMessage] = useState(null); // To store error or success messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call
      await axios.post("http://localhost:5000/api/contact", formData);

      // Success message
      setMessage({ type: "success", text: "Your message has been sent successfully!" });

      // Reset form
      setFormData({ name: "", email: "", message: "", gender: "Gender" });
    } catch (error) {
      // Error message
      setMessage({
        type: "error",
        text: error.response?.data?.message || "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div>
      <h2 className="Me">Contact Me</h2>
      <div className="form">
        <form onSubmit={handleSubmit} className="contact">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
          />
          <label >Select gender</label>
          <select className="select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            placeholder="Gender"
          >
            <option value="Gender">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button type="submit" className="send">Send</button>
        </form>

        {/* Render success or error messages */}
        {message && (
          <div
            style={{
              marginTop: "10px",
              color: message.type === "success" ? "green" : "red",
            }}
          >
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
