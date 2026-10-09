import Header from "../components/Header";

export default function Academy() {
    return (
        <>
            <Header />

            <main className="pt-32 px-8 max-w-4xl mx-auto">
                <h1 className="font-title text-4xl tracking-widest mb-12 text-center">
                    The Academy
                </h1>

                <section className="space-y-10 text-foreground/80 leading-7">
                    <p>
                        Founded centuries ago, Nevermore Academy stands apart
                        from conventional institutions. It was designed not to
                        correct what society fears, but to cultivate it.
                    </p>

                    <p>
                        Students admitted within its walls are not chosen by
                        chance. Each carries a trait deemed incompatible with
                        the outside world — an ability, a perception, or a
                        silence that cannot be ignored.
                    </p>

                    <p>
                        The artefacts catalogued in these archives are remnants
                        of student life. Objects that absorbed intent, solitude,
                        and memory. They are preserved not for commerce, but for
                        record.
                    </p>

                    <p className="text-sm text-foreground/50 italic">
                        Access to certain sections of the academy remains
                        restricted.
                    </p>
                </section>
            </main>
        </>
    );
}
