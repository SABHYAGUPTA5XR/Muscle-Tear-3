const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    order_id: { type: String, required: true, unique: true },
    customer_name: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    status: { type: String, enum: ["Packed", "Shipped", "Out for Delivery", "Delivered"], required: true }
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
