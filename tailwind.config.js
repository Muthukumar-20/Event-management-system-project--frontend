/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-pulse": "gradientPulse 15s infinite alternate",
        "wave-move": "waveMove 12s linear infinite",
        float: "float 10s infinite",
        "fade-in": "fadeIn 1s ease-in-out",
        "orb-float": "orbFloat 10s infinite linear",
        "glow-fade": "glowFade 1s ease-out",
        'pulse-slow': 'pulse 15s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'twinkle': 'twinkle 2s infinite',
      },
      keyframes: {
        gradientPulse: {
          "0%": { transform: "translate(-25%, -25%) scale(1)" },
          "100%": { transform: "translate(0, 0) scale(1.2)" },
        },
        waveMove: {
          "0%": { transform: "translateX(0) translateY(20px)" },
          "50%": { transform: "translateX(-50%) translateY(-10px)" },
          "100%": { transform: "translateX(-100%) translateY(20px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        orbFloat: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-50vh) translateX(50vw)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        glowFade: {
          "0%": { opacity: 1, transform: "scale(0)" },
          "100%": { opacity: 0, transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
          twinkle: {
            '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
            '50%': { opacity: 1, transform: 'scale(1.2)' },
          }
        },
      },
    },
  },
  plugins: [],
};
