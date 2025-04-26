import React, { useState, useEffect } from "react";
import "../styles/styles.css"; // Import the CSS file

const WorkoutTowel = () => {
  // State for the cart count
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Load cart count from localStorage on mount
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, []);

  // Function to get cart from localStorage
  const getCart = () => JSON.parse(localStorage.getItem("cart")) || [];

  // Function to save cart to localStorage
  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0)); // Update cart count
  };

  // Function to add item to cart
  const addToCart = () => {
    let cart = getCart();
    const existingProduct = cart.find((item) => item.id === "workoutTowel");

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        id: "workoutTowel",
        name: "Workout Towel",
        price: 1299, // Store as a number
        image: "/assets/images/towel.jpg",
        quantity: 1,
      });
    }

    saveCart(cart);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <header>
        <div className="logo">MUSCLE TEAR</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products" className="active">Products</a></li>
            <li><a href="/cart">Cart ({cartCount})</a></li>
            <li><a href="/settings">User</a></li>
          </ul>
        </nav>
      </header>

      {/* Product Description Section */}
      <div className="container">
        <div className="product-image">
          <img src="/assets/images/towel.jpg" alt="Workout Towel" />
        </div>
        <div className="product-details">
          <h2 className="product-title">Workout Towel</h2>
          <p className="product-description">
            A soft, sweat-absorbent, and quick-drying towel designed to keep you dry during workouts and maintain hygiene in the gym.
          </p>
          <div className="product-info">
            <p><strong>How to Use:</strong></p>
            <ul>
              <li>Carry it with you to the gym, yoga sessions, or outdoor workouts.</li>
              <li>Wipe sweat off your face, hands, and body during or after workouts.</li>
              <li>Use it to wipe down gym equipment before and after use.</li>
              <li>Wash regularly to maintain freshness and prevent bacteria buildup.</li>
            </ul>
            <p><strong>Quantity:</strong> 1 towel (Size: 100cm x 50cm)</p>
          </div>
          <div className="pricing">
            <p className="price">Price: ₹1,299</p>
          </div>
          <div className="rating-quantity">
            <p className="rating">Rating: ★★★★☆</p>
          </div>
          <button className="buy-button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 MUSCLE TEAR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WorkoutTowel;
