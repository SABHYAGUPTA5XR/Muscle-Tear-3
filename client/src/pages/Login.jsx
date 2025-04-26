import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password })
            .then((result) => {
                console.log(result);
                if (result.data === "success") {
                    navigate("/");
                }
                else if(result.data === "Invalid Email"){
                    alert("Invalid Email");
    }})
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                background: "linear-gradient(135deg, black, #8B0000)", // Black & Dark Red Gradient
            }}
        >
            <div
                className="p-4 rounded shadow-lg"
                style={{
                    backgroundColor: "white",
                    width: "350px",
                    borderRadius: "10px",
                    textAlign: "center",
                    border: "2px solid #8B0000", // Dark Red Border
                }}
            >
                <h2 style={{ color: "#8B0000", fontWeight: "bold" }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label htmlFor="email" style={{ fontWeight: "bold", color: "black" }}>Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control"
                            style={{
                                borderRadius: "5px",
                                border: "1px solid black",
                            }}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3 text-start">
                        <label htmlFor="password" style={{ fontWeight: "bold", color: "black" }}>Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control"
                            style={{
                                borderRadius: "5px",
                                border: "1px solid black",
                            }}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn w-100"
                        style={{
                            backgroundColor: "#8B0000",
                            color: "white",
                            borderRadius: "5px",
                            fontWeight: "bold",
                            padding: "10px",
                            transition: "0.3s",
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "black")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "#8B0000")}
                    >
                        Login
                    </button>
                </form>

                <p className="mt-3" style={{ color: "black" }}>New User?</p>
                <Link
                    to="/signup"
                    className="btn w-100"
                    style={{
                        backgroundColor: "black",
                        color: "white",
                        border: "1px solid #8B0000",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        textDecoration: "none",
                        padding: "10px",
                        transition: "0.3s",
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#8B0000")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "black")}
                >
                    Register
                </Link>
            </div>
        </div>
    );
}

export default Login;
