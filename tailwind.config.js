/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(1, 91, 170)",
        customBlue2: "#003D6B", // Custom color name and code
        customLightBlue: "#68A2D4", // Custom color name and code
        customLightBlue2: "#B0D1E7", // Custom color name and code(Ouse in offices)
        customDarkNavy: "#092540", // Custom color name and code(Ouse in Footer)
        customDarkBlue: "#012842", // Custom color name and code
        customDarkBlue2: "#16304A", // Custom color name and code
        customLightGray: "#F2F7FB", // Custom color name and code
        customGrayBlue: '#84939F', // Custom color name and code 
        primaryBlue:"#005baa", 
        textBlack:"#636363",
        primaryBg:"#012842",
        primaryBlue2:"#16304a",
        primaryBlueLight:" #02385d",
        paleSkyBlue :"#b0d0e7",
        primarySlate:"#F2F7FB",
        primaryBlue6:"#68A2D4",
        blueShade:"#b0d0e7"
      },
      clipPath: {
        customPolygon: 'polygon(100% 0px, 100% 100%, 0px 100%, 0px 0px)',
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-33.33%)" },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
