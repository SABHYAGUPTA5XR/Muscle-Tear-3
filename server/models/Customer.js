const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
}); 

module.exports = mongoose.model("Customers", customerSchema);