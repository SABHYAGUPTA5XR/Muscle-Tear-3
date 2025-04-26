import React from "react";
import styles from "../styles/WorkoutGloves.module.css"; // Import fixed CSS

const WorkoutGloves = ({ addToCart }) => {
  const product = {
    id: "workoutGloves",
    name: "Workout Gloves",
    price: 1499,
    image: "assets/images/gloves.jpg",
    description:
      "Padded gloves designed to improve grip strength, prevent calluses, and reduce hand strain during weightlifting, strength training, and pull-ups.",
    usage: [
      "Select the correct size for a snug fit.",
      "Slide your hands into the gloves and fasten any wrist straps securely.",
      "Use them while lifting weights, doing pull-ups, or using gym equipment to enhance grip and comfort.",
      "After use, wipe down the gloves and wash them regularly to maintain hygiene.",
    ],
    quantity: "1 pair",
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

export default WorkoutGloves;
