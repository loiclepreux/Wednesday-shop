import type { Product } from "../types/product";

export const products: Product[] = [
    {
        id: 1,
        name: "Raven Sigil Hoodie",
        category: "Apparel",
        price: 89,
        image: "/products/raven-hoodie.svg",
        description:
            "Heavy black cotton, worn soft by long nights in the library tower. The raven sigil is stitched in violet thread — the colour reserved for students who never ask permission.",
    },
    {
        id: 2,
        name: "Obsidian Raven Ring",
        category: "Jewellery",
        price: 49,
        image: "/products/raven-ring.svg",
        description:
            "Sterling silver set with a cut of obsidian. Legend says the stone grows colder when its wearer is being lied to. Most owners refuse to take it off.",
    },
    {
        id: 3,
        name: "Nevermore Archive Tote",
        category: "Accessories",
        price: 59,
        image: "/products/archive-tote.svg",
        description:
            "Raw canvas bag stamped with the archive seal, MDCCXCI. Large enough for three grimoires, a typewriter ribbon and whatever you are not supposed to be carrying.",
    },
    {
        id: 4,
        name: "Black Dahlia Candle",
        category: "Home",
        price: 34,
        image: "/products/dahlia-candle.svg",
        description:
            "Black wax, violet flame. Notes of dark florals, old paper and smoke. Lit in the dormitories after curfew, when the corridors fall silent.",
    },
    {
        id: 5,
        name: "Nevermore Journal",
        category: "Stationery",
        price: 39,
        image: "/products/nevermore-journal.svg",
        description:
            "Bound in black linen with a violet ribbon marker. Two hundred blank pages for theories, suspects and the things you are not ready to say out loud.",
    },
    {
        id: 6,
        name: "Raven Feather Quill",
        category: "Stationery",
        price: 29,
        image: "/products/raven-quill.svg",
        description:
            "A dark feather fitted with a steel nib. Writes in deep violet ink. Recommended for letters that should never be sent.",
    },
];
