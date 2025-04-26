import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

import "../styles/styles.css"; // Ensure the CSS is applied

const UserDetails = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_orderID: "",
    user_age: "",
    user_message: "",
  });

  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const navigate = useNavigate(); // React Router navigation

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send email via EmailJS
    emailjs
      .send("service_1qpm30p", "template_qsckpqb", formData, "oipcbWBIr3MgYhLxW")
      .then(
        () => {
          setIsOrderConfirmed(true); // Show confirmation message
          setTimeout(() => navigate("/"), 3000); // Redirect to Home after 3s
        },
        (error) => {
          console.error("Email sending failed:", error);
          alert("There was an error sending your order. Please try again.");
        }
      );
  };

  return (
    <div className="user-details">
      <header>
        <div className="logo">MUSCLE TEAR</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/settings">User</a></li>
          </ul>
        </nav>
      </header>

      <section className="container">
        {!isOrderConfirmed ? (
          <>
            <h1>Enter Your Details</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name:</label>
                <input type="text" name="user_name" required value={formData.user_name} onChange={handleChange} />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" name="user_email" required value={formData.user_email} onChange={handleChange} />
              </div>
              <div>
                <label>Order ID:</label>
                <input type="number" name="user_orderID" required value={formData.user_orderID} onChange={handleChange} />
              </div>
              <div>
                <label>Age:</label>
                <input type="number" name="user_age" required value={formData.user_age} onChange={handleChange} />
              </div>
              <div>
                <label>Message:</label>
                <input type="text" name="user_message" required value={formData.user_message} onChange={handleChange} />
              </div>
              <button type="submit" className="btn">BUY NOW</button>
            </form>
          </>
        ) : (
          <h2>Your order is confirmed! Redirecting...</h2>
        )}
      </section>

      <footer>
        <p>&copy; 2025 MUSCLE TEAR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserDetails;
