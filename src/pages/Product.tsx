import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { products } from "../data/products";
import { useCartStore } from "../store/useCartStore";

export default function Product() {
    const { id } = useParams();
    const addToCart = useCartStore((state) => state.addToCart);
    const product = products.find((p) => p.id === Number(id));

    return (
        <>
            <Header />

            <main className="pt-32 px-8 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-20">
                    <div className="bg-black/40 h-[520px] flex items-center justify-center overflow-hidden">
                        {product && (
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                            />
                        )}
                    </div>

                    <div>
                        <h1 className="font-title text-4xl tracking-widest mb-6">
                            {product?.name}
                        </h1>

                        <p className="text-foreground/80 leading-7 mb-8">
                            This artefact is catalogued within the restricted
                            archives of Nevermore Academy. Its presence is
                            subtle, its purpose unclear, yet those who possess
                            it rarely part with it.
                        </p>

                        <span className="block text-2xl mb-10">
                            {product?.price} €
                        </span>

                        <button
                            disabled={!product}
                            onClick={() => product && addToCart(product)}
                            className="
                border border-white/20
                px-10 py-4
                text-xs tracking-widest uppercase
                transition-all duration-500
                disabled:opacity-30 disabled:cursor-not-allowed
                hover:border-accent hover:text-accent
              "
                        >
                            Add to Cart
                        </button>

                        <div className="mt-12 border-t border-white/10 pt-6">
                            <p className="text-xs tracking-widest uppercase text-foreground/40 mb-2">
                                Archive note
                            </p>
                            <p className="text-sm text-foreground/60 leading-6">
                                Classified as a personal item. Circulation
                                within the academy remains limited to selected
                                individuals.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
