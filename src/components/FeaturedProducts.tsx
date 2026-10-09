import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
    const featured = products.slice(0, 3);

    return (
        <section id="archives" className="bg-background py-32">
            <div className="max-w-7xl mx-auto px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    className="font-title text-3xl tracking-widest mb-20 text-center"
                >
                    Selected Artefacts
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {featured.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link
                        to="/relics"
                        className="inline-flex items-center gap-3 border border-white/20 px-8 py-3 text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-500"
                    >
                        View all relics
                        <span className="text-lg">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
