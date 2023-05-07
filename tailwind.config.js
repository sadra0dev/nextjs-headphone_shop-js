/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "dark-1": "#808080",
                "dark-2": "#324d67",
                "red-1": "#f02d34",
                "gray-1": "#dcdcdc",
                "gray-2": "#ebebeb",
            },
            spacing: {
                25: "25rem",
                31: "31.25rem",
            },
            fontSize: {
                "40p": "40px",
                "80p": "80px",
                "10xl": "10rem",
            },
        },
    },
    plugins: [],
}
