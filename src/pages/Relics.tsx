import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["All", ...new Set(products.map((p) => p.category))];

type SortOption = "default" | "price-asc" | "price-desc";

export default function Relics() {
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<SortOption>("default");

    const query = search.trim().toLowerCase();

    const filtered = products
        .filter((p) => category === "All" || p.category === category)
        .filter((p) => p.name.toLowerCase().includes(query));

    const sorted = [...filtered].sort((a, b) => {
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        return 0;
    });

    const resetFilters = () => {
        setCategory("All");
        setSearch("");
        setSort("default");
    };

    return (
        <main className="pt-32 px-6 md:px-8 max-w-7xl mx-auto min-h-screen">
            <header className="mb-16 max-w-2xl">
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

            {/* Recherche + tri */}
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search the collection…"
                    className="w-full md:max-w-sm bg-transparent border border-white/20 px-4 py-3 text-sm focus:outline-none focus:border-accent transition"
                />

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortOption)}
                    className="bg-background border border-white/20 px-4 py-3 text-xs tracking-widest uppercase focus:outline-none focus:border-accent transition"
                >
                    <option value="default">Sort: Catalogue order</option>
                    <option value="price-asc">Price: Low to high</option>
                    <option value="price-desc">Price: High to low</option>
                </select>
            </div>

            {/* Catégories */}
            <div className="flex flex-wrap gap-3 mb-6">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-4 py-2 text-[10px] tracking-[0.3em] uppercase border transition-all duration-300 ${
                            category === cat
                                ? "border-accent text-accent bg-accent/10"
                                : "border-white/15 text-foreground/60 hover:border-white/40 hover:text-foreground"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <p className="text-xs tracking-widest uppercase text-foreground/40 mb-12">
                {sorted.length} {sorted.length > 1 ? "artefacts" : "artefact"}
            </p>

            {sorted.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                    {sorted.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24">
                    <p className="font-title text-2xl tracking-widest mb-4">
                        Nothing was found
                    </p>
                    <p className="text-foreground/50 mb-10">
                        No artefact in the archives matches your search.
                    </p>
                    <button
                        onClick={resetFilters}
                        className="border border-white/20 px-8 py-3 text-xs tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-500"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </main>
    );
}
