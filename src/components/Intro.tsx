import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "nevermore-intro-seen";

function hasSeenIntro() {
    try {
        return sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
        return false;
    }
}

export default function Intro() {
    const [visible, setVisible] = useState(() => !hasSeenIntro());

    useEffect(() => {
        if (!visible) return;

        try {
            sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
            // navigation privée : on ignore, l'intro se rejouera simplement
        }

        const timer = setTimeout(() => setVisible(false), 3000);
        return () => clearTimeout(timer);
    }, [visible]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    onClick={() => setVisible(false)}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center cursor-pointer"
                >
                    <motion.svg
                        viewBox="0 0 100 100"
                        className="w-20 h-20 fill-foreground mb-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <path d="M50 30c-3 0-5 2-6 4l-6 1 6 2c0 3 1 5 2 7C36 40 22 34 4 36c8 3 14 7 18 12-5 0-9 1-12 3 9 0 18 2 25 6-3 1-5 3-6 5 7-2 13-2 18-1l-3 13 6-7 0 9 4-9 6 7-3-13c5-1 11-1 18 1-1-2-3-4-6-5 7-4 16-6 25-6-3-2-7-3-12-3 4-5 10-9 18-12-18-2-32 4-42 8 1-2 2-4 2-7 0-5-3-8-7-8z" />
                    </motion.svg>

                    <motion.h1
                        className="font-title text-2xl md:text-5xl pl-[0.5em]"
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        animate={{ opacity: 1, letterSpacing: "0.5em" }}
                        transition={{
                            duration: 2,
                            ease: "easeOut",
                            delay: 0.3,
                        }}
                    >
                        NEVERMORE
                    </motion.h1>

                    <motion.p
                        className="mt-6 text-[10px] tracking-[0.4em] uppercase text-foreground/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        Academy · Est. 1791
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
