import React from "react";
import "../styles/styles.css";

const Home = () => {
  return (
    <>
      {/* Navigation Bar */}
      <header>
        <div className="logo">MUSCLE TEAR</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/settings">User</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Push Limits. Break Barriers.</h1>
          <p>Unleash the beast within. Premium fitness gear and supplements.</p>
          <div className="buttons">
            <a href="/products" className="btn">Shop Now</a>
            <a href="/about" className="btn secondary">Explore More</a>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product">
            <a href="/products"><img src="/assets/images/protein.webp" alt="Protein Supplement" /></a>
            <h3>Protein Supplement</h3>
            <p>&#8377;2,499.00</p>
          </div>
          <div className="product">
            <a href="/products"><img src="/assets/images/gloves.jpg" alt="Workout Gloves" /></a>
            <h3>Workout Gloves</h3>
            <p>&#8377;1,499.00</p>
          </div>
          <div className="product">
            <a href="/products"><img src="/assets/images/shaker.jpg" alt="Gym Shaker" /></a>
            <h3>Gym Shaker</h3>
            <p>&#8377;999.00</p>
          </div>
        </div>
      </section>

{/* Headquarters Location Section */}
<section className="location">
  <h2>Our Headquarters</h2>
  <p>This is our first gym facility center, where it all started.</p>
  <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57905.56571393285!2d67.11334533125!3d24.894643500000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339dd644b99db%3A0x1dcfc823fd54e7d5!2sFit%20Fusion%20-%20Gym!5e0!3m2!1sen!2s!4v1705432080225!5m2!1sen!2s"
      width="100%"
      height="400"
      style={{ border: 0, borderRadius: "10px" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>

{/* Our Current Location Section */}
<section className="location">
  <h2>Our Location</h2>
  <p>Visit us at Muscle Engineer, the most premium fitness club in Vellore.</p>
  <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.8607304382113!2d79.1333!3d12.9698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad476c1f1f1f1f%3A0x1f1f1f1f1f1f!2sMuscle+Engineer!5e0!3m2!1sen!2sin!4v1705432080225!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: "0", borderRadius: "10px" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <div className="gym-details">
    <h3>Muscle Engineer</h3>
    <p>
      No. 4, 568/1A1, Opposite to VIT, Chennai Salai, Katpadi, Vellore - 632014
    </p>
    <p>Phone: +91 786-786-6555</p>
    <p>Email: info@muscleengineer.onmicrosoft.com</p>
    <a href="https://www.muscleengineer.in/" target="_blank" rel="noopener noreferrer">
      Visit Website
    </a>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <img src="/assets/images/face1.jpg" alt="Customer 1" />
            <p>"MUSCLE TEAR transformed my workout routine. The supplements truly deliver results!"</p>
            <h3>John Doe</h3>
          </div>
          <div className="testimonial">
            <img src="/assets/images/face2.jpg" alt="Customer 2" />
            <p>"Outstanding quality and great customer service. Highly recommended for fitness enthusiasts!"</p>
            <h3>Jane Smith</h3>
          </div>
          <div className="testimonial">
            <img src="/assets/images/face3.jpg" alt="Customer 3" />
            <p>"I've never felt stronger. MUSCLE TEAR products are a game changer!"</p>
            <h3>Mike Johnson</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 MUSCLE TEAR. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
