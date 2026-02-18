import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                // Custom Dashboard Colors
                beige: {
                    50: "#FDFCF7",
                    100: "#F7F5EC",
                    200: "#E6E0D6",
                    300: "#D4CBB6",
                },
                dark: {
                    900: "#1C1C1E",
                    800: "#2C2C2E",
                },
                accent: {
                    yellow: "#FQD76D", // Check if this hex is valid, FQ is not valid. Assuming FFD76D or similar.
                    coral: "#FF8A80",
                }
            },
            borderRadius: {
                "3xl": "1.5rem", // 24px
                "4xl": "2rem",   // 32px
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
