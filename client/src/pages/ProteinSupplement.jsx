import React, { useState} from "react";
import styles from "../styles/ProteinSupplement.module.css"; // Import CSS Module

const ProteinSupplement = () => {
  // State to track cart count
  const [cartCount] = useState(0);

  // Load cart count from localStorage on component mount


  // Function to get cart from localStorage safely
  

  // Function to update the cart count in Navbar


  return (
    <header className={styles.header}>
      <div className={styles.logo}>MUSCLE TEAR</div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/products" className={styles.active}>Products</a></li>
          <li><a href="/cart">Cart <span className={styles.cartCount}>({cartCount})</span></a></li>
          <li><a href="/settings">User</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default ProteinSupplement;
