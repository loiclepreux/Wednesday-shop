import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCartStore } from "../store/useCartStore";
import { useToastStore } from "../store/useToastStore";

export default function Product() {
    const { id } = useParams();
    const addToCart = useCartStore((state) => state.addToCart);
    const showToast = useToastStore((state) => state.showToast);
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <>
                <main className="pt-40 px-8 max-w-2xl mx-auto text-center min-h-screen">
                    <p className="text-xs tracking-widest uppercase text-foreground/40 mb-4">
                        Archive error
                    </p>

                    <h1 className="font-title text-3xl md:text-4xl tracking-widest mb-6">
                        Artefact not found
                    </h1>

                    <p className="text-foreground/60 leading-7 mb-12">
                        This item does not exist in the archives of Nevermore
                        Academy — or it has been deliberately erased.
                    </p>

                    <Link
                        to="/"
                        className="inline-block border border-white/20 px-8 py-3 text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-500"
                    >
                        Return to the relics
                    </Link>
                </main>
            </>
        );
    }

    return (
        <>
            <main className="pt-32 px-8 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-20">
                    <div className="bg-black/40 h-[520px] flex items-center justify-center overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                        />
                    </div>

                    <div>
                        <p className="text-xs tracking-widest uppercase text-foreground/40 mb-4">
                            {product.category}
                        </p>

                        <h1 className="font-title text-4xl tracking-widest mb-6">
                            {product.name}
                        </h1>

                        <p className="text-foreground/80 leading-7 mb-8">
                            {product.description}
                        </p>

                        <span className="block text-2xl mb-10">
                            {product.price} €
                        </span>

                        <button
                            onClick={() => {
                                addToCart(product);
                                showToast(product.name);
                            }}
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
