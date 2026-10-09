import Header from "../components/Header";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import FeaturedProducts from "../components/FeaturedProducts";
import AmbienceAudio from "../components/AmbienceAudio";

export default function Home() {
    return (
        <>
            <Header />
            <AmbienceAudio />

            <main className="pt-20">
                <Hero />
                <Manifesto />
                <FeaturedProducts />
            </main>
        </>
    );
}
