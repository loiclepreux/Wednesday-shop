import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Academy from "./pages/Academy";
import Checkout from "./pages/checkout";
import Intro from "./components/Intro";
import Relics from "./pages/Relics";

export default function App() {
    const location = useLocation();

    return (
        <>
            <Intro />
            <Header />
            <Toast />

            <AnimatePresence
                mode="wait"
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={<Product />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/academy" element={<Academy />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/relics" element={<Relics />} />
                    </Routes>
                </motion.div>
            </AnimatePresence>

            <Footer />
        </>
    );
}
