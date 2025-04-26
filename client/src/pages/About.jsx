import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css"; // Adjust path based on your project structure

const About = () => {
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

      {/* Brand Story & Mission Section */}
      <section className="about-intro">
        <div className="container">
          <h1>About MUSCLE TEAR</h1>
          <p>
            At MUSCLE TEAR, we are more than just a brand—we are a movement.
            Founded by passionate fitness enthusiasts, our mission is to push
            limits, break barriers, and inspire greatness. We offer premium
            fitness gear and top-quality supplements that empower you to
            unlock your full potential.
          </p>
          <p>
            Our journey began with a simple belief: dedication and perseverance
            transform lives. Over the years, we have grown into a trusted name
            among athletes and fitness lovers alike. Join us as we redefine
            the limits of human potential, one workout at a time.
          </p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="team">
        <div className="container">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            {[
              { name: "Sabhya Gupta", role: "Founder & CEO", img: "sabhyaFace.jpg", linkedin: "https://www.linkedin.com/in/sabhyagupta4xr/" },
              { name: "Garv Katariya", role: "Head of Marketing", img: "garvFace.jpg", linkedin: "https://www.linkedin.com/in/garv-katariya/" },
              { name: "Ashna Bansal", role: "Product Manager", img: "ashnaFace.jpg", linkedin: "https://www.linkedin.com/in/ashna-bansal/" }
            ].map((member, index) => (
              <div key={index} className="team-member">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={`/assets/images/${member.img}`} alt={member.name} />
                </a>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 MUSCLE TEAR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
