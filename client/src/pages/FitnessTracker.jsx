import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/FitnessTracker.module.css"; // Import fixed CSS

const FitnessTracker = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <header className={styles.header}>
        <div className={styles.logo}>MUSCLE TEAR</div>
        <nav>
          <ul className={styles.navList}>
            <li><Link to="/" className={styles.navLink}>Home</Link></li>
            <li><Link to="/about" className={styles.navLink}>About</Link></li>
            <li><Link to="/products" className={`${styles.navLink} ${styles.active}`}>Products</Link></li>
            <li><Link to="/cart" className={styles.navLink}>Cart</Link></li>
            <li><Link to="/settings" className={styles.navLink}>User</Link></li>
          </ul>
        </nav>
      </header>

      {/* Product Description Section */}
      <div className={styles.container}>
        <div className={styles.productImage}>
          <img src="/assets/images/fitness.jpg" alt="Fitness Tracker" />
        </div>
        <div className={styles.productDetails}>
          <h2 className={styles.productTitle}>Fitness Tracker</h2>
          <p className={styles.productDescription}>
            A wearable smart device that monitors heart rate, steps, calories burned, sleep patterns, and workout intensity to help track progress and achieve fitness goals.
          </p>
          <div className={styles.productInfo}>
            <p><strong>How to Use:</strong></p>
            <ul>
              <li>Charge the tracker fully before first use.</li>
              <li>Wear it snugly on your wrist for accurate tracking.</li>
              <li>Sync it with a smartphone app to store and analyze fitness data.</li>
              <li>Monitor your daily steps, heart rate, and calories burned throughout the day.</li>
              <li>Set personalized fitness goals and track workouts for better results.</li>
            </ul>
            <p><strong>Quantity:</strong> 1 fitness tracker</p>
          </div>
          <div className={styles.pricing}>
            <p className={styles.price}>Price: ₹4,999</p>
          </div>
          <div className={styles.ratingQuantity}>
            <p className={styles.rating}>Rating: ★★★★☆</p>
          </div>
          <button 
            className={`${styles.buyButton} ${styles.addToCart}`}
            onClick={() => addToCart("Fitness Tracker", "₹4,999", "/assets/images/fitness.jpg")}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 MUSCLE TEAR. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Function to handle adding to cart (localStorage simulation)
const addToCart = (name, price, image) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find(item => item.id === name);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ id: name, name, price, image, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
};

export default FitnessTracker;
