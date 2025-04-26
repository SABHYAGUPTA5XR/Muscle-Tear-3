import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart"; // Import custom hook
import "../styles/styles.css"; // Adjust path if needed

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useCart(); // Use context

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

      {/* Cart Section */}
      <section className="cart">
        <div className="container">
          <h1>Your Cart</h1>
          {cart.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td><img src={`/assets/images/${item.image}`} alt={item.name} /></td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price.toLocaleString()}</td>
                    <td>
                      <button className="btn remove-btn" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Your cart is empty.</p>
          )}

          {/* Checkout Section */}
          {cart.length > 0 && (
            <div className="checkout">
              <h2>Total: &#8377;{totalPrice.toLocaleString()}</h2>
              <Link to="/userdetails" className="btn checkout-btn">
                Checkout
              </Link>
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

export default Cart;
