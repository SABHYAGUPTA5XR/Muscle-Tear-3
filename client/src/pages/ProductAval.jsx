import { useState, useEffect } from "react";
import axios from "axios";

function ProductAvailability() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <section className="product-availability">
            <h2>Product Availability</h2>
            <p>Check out our available supplements and fitness products.</p>
            <div className="product-list">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} className="product-card">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p><strong>Price:</strong> ₹{product.price}</p>
                            <p className={product.stock > 0 ? "in-stock" : "out-of-stock"}>
                                {product.stock > 0 ? "In Stock" : "Out of Stock"}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
        </section>
    );
}

export default ProductAvailability;
