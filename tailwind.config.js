export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fireFlyWingLeft: {
          "0%": { transform: "rotate(-30deg)" },
          "25%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(30deg)" },
          "75%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(-30deg)" },
        },
        fireFlyWingLeft2: {
          "0%": { transform: "rotate(-10deg)" },
          "25%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(50deg)" },
          "75%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(-10deg)" },
        },
        fireFlyWingright: {
          "0%": { transform: "rotate(30deg)" },
          "25%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(-30deg)" },
          "75%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(30deg)" },
        },
        fireFlyWingright2: {
          "0%": { transform: "rotate(10deg)" },
          "25%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-50deg)" },
          "75%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(10deg)" },
        },
        fireflyGlow: {
          "0%": { filter: "brightness(.2)" },
          "10%": { filter: "brightness(.4)" },
          "20%": { filter: "brightness(.8)" },
          "30%": { filter: "brightness(1.2)" },
          "40%": { filter: "brightness(1.6)" },
          "50%": { filter: "brightness(2.5)" },
          "60%": { filter: "brightness(1.6)" },
          "70%": { filter: "brightness(1.2)" },
          "80%": { filter: "brightness(.8)" },
          "90%": { filter: "brightness(.4)" },
          "100%": { filter: "brightness(.2)" },
        },
        fireFlyMove: {
          "0%": { transform: "translateX(100px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
      animation: {
        fireFlyWingLeft: "fireFlyWingLeft .4s linear infinite",
        fireFlyWingLeft2: "fireFlyWingLeft2 .8s linear infinite",
        fireFlyWingright: "fireFlyWingright .4s linear infinite",
        fireFlyWingright2: "fireFlyWingright2 .8s linear infinite",
        fireFlyGlow: "fireflyGlow 2s linear infinite",
        fireFlyMove: "fireFlyMove 2s linear infinite",
      },
    },
  },
  plugins: [],
};
