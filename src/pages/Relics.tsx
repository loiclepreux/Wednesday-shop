import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Relics() {
    return (
        <main className="pt-32 px-6 md:px-8 max-w-7xl mx-auto min-h-screen">
            <header className="mb-20 max-w-2xl">
                <p className="text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4">
                    The collection
                </p>
                <h1 className="font-title text-4xl md:text-5xl tracking-widest mb-6">
                    Relics
                </h1>
                <p className="text-foreground/60 leading-7">
                    Every artefact recovered from the academy, catalogued and
                    released to those who understand what they carry.
                </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
}