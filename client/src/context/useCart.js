import { useContext } from "react";
import CartContext from "../context/CartProvider"; // Corrected path

export const useCart = () => useContext(CartContext);
