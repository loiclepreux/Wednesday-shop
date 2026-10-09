import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/products";

export default function FeaturedProducts() {
    const navigate = useNavigate();

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
                    {products.map((product) => (
                        <motion.article
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            onClick={() => navigate(`/product/${product.id}`)}
                            className="
    group cursor-pointer
    transition-all duration-500
    hover:-translate-y-2
  "
                        >
                            <div className="overflow-hidden mb-6 border border-white/10 bg-black/30">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="
        w-full h-[420px] object-cover grayscale
        transition-all duration-700
        group-hover:grayscale-0 group-hover:scale-105
      "
                                />
                            </div>

                            <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-2">
                                {product.category}
                            </p>

                            <h3 className="font-title tracking-wide mb-2">
                                {product.name}
                            </h3>

                            <span className="text-sm text-foreground/70">
                                {product.price} €
                            </span>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
