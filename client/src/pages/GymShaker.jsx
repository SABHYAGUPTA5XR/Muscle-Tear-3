import React, { useState} from "react";
import "../styles/styles.css"; // Ensure correct path for styles

const GymShaker = () => {
  // State to track cart count
  const [cartCount, setCartCount] = useState(0);

  // Load cart from localStorage
//   useEffect(() => {
//     updateCartCount();
//   }, []);

  // Function to get cart from localStorage
  const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  };

  // Function to save cart to localStorage
  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Function to update the cart count in Navbar
  const updateCartCount = () => {
    const cart = getCart();
    const count = cart.reduce((acc, item) => acc + item.quantity, 0); // Total items in cart
    setCartCount(count);
  };

  // Function to add item to cart
  const addToCart = () => {
    const name = "Gym Shaker";
    const price = 999; // Store price as number
    const image = "/assets/images/shaker.jpg"; // Adjust path if necessary

    let cart = getCart();
    const existingProduct = cart.find((item) => item.id === name);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        id: name,
        name: name,
        price: price,
        image: image,
        quantity: 1,
      });
    }

    saveCart(cart);
    updateCartCount(); // Update cart count after adding
    alert(`${name} added to cart!`);
  };

  return (
    <div>
      {/* Navbar */}
      <header>
        <div className="logo">MUSCLE TEAR</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products" className="active">Products</a></li>
            <li><a href="/cart">Cart <span id="cart-count">({cartCount})</span></a></li>
            <li><a href="/settings">User</a></li>
          </ul>
        </nav>
      </header>

      {/* Product Section */}
      <div className="container">
        <div className="product-image">
          <img src="/assets/images/shaker.jpg" alt="Gym Shaker" />
        </div>
        <div className="product-details">
          <h2 className="product-title">Gym Shaker</h2>
          <p className="product-description">
            A portable mixing bottle with a built-in blending mechanism, ideal for smoothly mixing protein shakes, pre-workouts,
            and other supplements without clumps.
          </p>
          <div className="product-info">
            <p><strong>How to Use:</strong></p>
            <ul>
              <li>Add 1 scoop of protein powder or any supplement as needed.</li>
              <li>Pour 250ml of water, milk, or juice into the shaker.</li>
              <li>Secure the lid tightly to prevent leaks.</li>
              <li>Shake vigorously for 20-30 seconds until fully mixed.</li>
              <li>Rinse immediately after use to prevent residue buildup.</li>
            </ul>
            <p><strong>Quantity:</strong> 700ml capacity</p>
          </div>
          <div className="pricing">
            <p className="price">Price: ₹999</p>
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
        <p>&copy; 2025 MUSCLE TEAR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GymShaker;
