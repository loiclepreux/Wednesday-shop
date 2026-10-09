import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Academy from "./pages/Academy";
import Checkout from "./pages/checkout";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    );
}
