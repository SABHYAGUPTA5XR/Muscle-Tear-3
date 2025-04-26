const express = require("express"); 
const mongoose = require("mongoose");
const cors = require("cors");
const CustomerModel = require("./models/Customer");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/customer")

app.post("/login", (req, res) => { 
    const {email, password} = req.body;
    CustomerModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success");
            }else{
                res.json("Invalid Password");
            }
        }
        else{
            res.json("Invalid Email");
        }
    })
})

app.post("/register",(req, res) => { 
    CustomerModel.create(req.body)
    .then(customers => {
        res.json(customers)
    }).catch(err => {
        res.json(err);
    })
})

app.listen(3001, () => {    
    console.log("Server is running");
})


/*const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/gymstore", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB Connection Error:", err));

app.use("/products", productRoutes);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/