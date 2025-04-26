const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Get all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Add a new product
router.post("/", async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;
        const newProduct = new Product({ name, description, price, stock });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: "Error adding product" });
    }
});

// Update stock of a product
router.put("/:id", async (req, res) => {
    try {
        const { stock } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { stock }, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: "Error updating stock" });
    }
});

module.exports = router;
