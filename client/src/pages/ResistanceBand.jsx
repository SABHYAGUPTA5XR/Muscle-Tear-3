import React from "react";
import styles from "../styles/ResistantBand.module.css"; // Import the new module CSS

const ResistanceBand = ({ addToCart }) => {
  const product = {
    id: "resistanceBand",
    name: "Resistance Band",
    price: 1599,
    image: "assets/images/resistanceBand.jpg",
    description:
      "A versatile and durable elastic band designed for strength training, muscle activation, flexibility exercises, and rehabilitation.",
    usage: [
      "Choose the appropriate resistance level based on your fitness level.",
      "Use for warm-ups, strength training, stretching, or rehab exercises.",
      "Secure the band under your feet or around a stable object for added resistance.",
      "Perform squats, shoulder presses, bicep curls, or resistance-assisted push-ups.",
      "Store in a dry place and avoid overstretching to maintain durability.",
    ],
    quantity: "1 resistance band (Medium Resistance, 15-25 lbs)",
    rating: "★★★★☆",
  };

  return (
    <div className={styles.container}>
      <div className={styles.productImage}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.productDetails}>
        <h2 className={styles.productTitle}>{product.name}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.productInfo}>
          <p><strong>How to Use:</strong></p>
          <ul>
            {product.usage.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <p><strong>Quantity:</strong> {product.quantity}</p>
        </div>
        <div className={styles.pricing}>
          <p className={styles.price}>Price: ₹{product.price}</p>
        </div>
        <div className={styles.ratingQuantity}>
          <p className={styles.rating}>Rating: {product.rating}</p>
        </div>
        <button
          className={styles.buyButton}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ResistanceBand;
