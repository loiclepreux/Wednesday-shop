import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "../src/pages/Product";
import Cart from "../src/pages/Cart";
import Academy from "../src/pages/Academy";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/academy" element={<Academy />} />
        </Routes>
    );
}
