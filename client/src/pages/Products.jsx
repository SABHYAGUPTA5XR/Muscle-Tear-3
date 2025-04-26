import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart"; // Import useCart hook
import "../styles/styles.css"; // Adjust path if needed

const Products = () => {
  const { addToCart } = useCart(); // Get addToCart function from context

  // Product list (Can be fetched from API later)
  const products = [
    { id: 1, name: "Protein Supplement", price: 2499, image: "protein.jpg", link: "proteinSupplement" },
    { id: 2, name: "Workout Gloves", price: 1499, image: "gloves.jpg", link: "workoutGloves" },
    { id: 3, name: "Gym Shaker", price: 999, image: "shaker.jpg", link: "gymShaker" },
    { id: 4, name: "Resistance Bands", price: 1599, image: "resistanceBand.jpg", link: "resistanceBand" },
    { id: 5, name: "Workout Towel", price: 1299, image: "towel.jpg", link: "workoutTowel" },
    { id: 6, name: "Fitness Tracker", price: 4999, image: "fitness.jpg", link: "fitnessTracker" },
  ];

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

      {/* Products Section */}
      <section className="products">
        <div className="container">
          <h1>Our Products</h1>
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <Link to={`/${product.link}`}>
                  <img src={`/assets/images/${product.image}`} alt={product.name} />
                </Link>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>&#8377;{product.price.toLocaleString()}</p>
                  <button className="btn" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
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

export default Products;
