import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Academy from "./pages/Academy";
import Checkout from "./pages/checkout";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/academy" element={<Academy />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
        </>
    );
}
