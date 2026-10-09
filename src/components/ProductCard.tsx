import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "../types/product";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            <Link
                to={`/product/${product.id}`}
                className="group block transition-all duration-500 hover:-translate-y-2"
            >
                <div className="overflow-hidden mb-6 border border-white/10 bg-black/30">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[420px] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                </div>

                <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-2">
                    {product.category}
                </p>

                <h3 className="font-title tracking-wide mb-2 group-hover:text-accent transition">
                    {product.name}
                </h3>

                <span className="text-sm text-foreground/70">
                    {product.price} €
                </span>
            </Link>
        </motion.article>
    );
}