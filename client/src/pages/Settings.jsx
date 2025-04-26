import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css"; // Adjust the path if needed
import "./settings.css"; // Adjust the path if needed

const Settings = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    address: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <header>
        <div className="logo">MUSCLE TEAR</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/settings">User</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
          </ul>
        </nav>
      </header>

      {/* Settings Section */}
      <section className="settings">
        <div className="container">
          <h1>User Account Details</h1>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required />
              </div>
              <div>
                <label>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label>Address:</label>
                <textarea name="address" rows="3" value={formData.address} onChange={handleChange} required />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn">Confirm</button>
            </form>
          ) : (
            <div id="save-message">
              <h2>Your details have been saved successfully!</h2>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 MUSCLE TEAR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Settings;
