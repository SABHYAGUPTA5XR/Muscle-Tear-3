const mongoose = require("mongoose");
const Order = require("./models/Order");

mongoose.connect("mongodb://127.0.0.1:27017/status", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const orders = require("./orders.json"); // Save the above JSON in `orders.json`

Order.insertMany(orders)
    .then(() => {
        console.log("Order data inserted successfully!");
        mongoose.connection.close();
    })
    .catch(err => console.error("Error inserting orders:", err));
