/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#0b0b0b",
                foreground: "#e6e6e6",
                accent: "#7c7cff",
            },
            fontFamily: {
                title: ["Cinzel", "serif"],
                body: ["Inter", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};
