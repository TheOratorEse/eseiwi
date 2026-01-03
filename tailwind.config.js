/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-cyan": "#00d9ff",
        "neon-blue": "#0099ff",
        "neon-purple": "#9d00ff",
        "dark-bg": "#0a0e27",
        "navy-bg": "#0f1629",
        "navy-light": "#1a2447",
        "navy-lighter": "#2a3d66",
      },
      fontFamily: {
        space: ["Space Mono", "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        scan: "scan 3s linear infinite",
        shimmer: "shimmer 2s infinite",
        "particle-float": "particleFloat 6s ease-in-out infinite",
        "pulse-ring": "pulseRing 1.5s ease-out infinite",
        "bounce-in": "bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "slide-in-left": "slideInLeft 0.8s ease-out",
        "slide-in-right": "slideInRight 0.8s ease-out",
        "slide-in-up": "slideInUp 0.8s ease-out",
        "text-shimmer": "textShimmer 3s infinite",
        orbit: "orbit 10s linear infinite",
        blink: "blink 1.4s infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0, 217, 255, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 217, 255, 0.6)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(157, 0, 255, 0.3), inset 0 0 20px rgba(157, 0, 255, 0.1)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(157, 0, 255, 0.6), inset 0 0 30px rgba(157, 0, 255, 0.2)",
          },
        },
        scan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        particleFloat: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "1" },
          "25%": {
            transform: "translateY(-20px) translateX(10px)",
            opacity: "0.8",
          },
          "50%": {
            transform: "translateY(-40px) translateX(-10px)",
            opacity: "0.6",
          },
          "75%": {
            transform: "translateY(-20px) translateX(10px)",
            opacity: "0.8",
          },
          "100%": { transform: "translateY(0) translateX(0)", opacity: "1" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(0, 217, 255, 0.7)" },
          "70%": { boxShadow: "0 0 0 30px rgba(0, 217, 255, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(0, 217, 255, 0)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInUp: {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        textShimmer: {
          "0%": { backgroundPosition: "0% center" },
          "50%": { backgroundPosition: "100% center" },
          "100%": { backgroundPosition: "0% center" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(40px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(40px) rotate(-360deg)",
          },
        },
        blink: {
          "0%, 20%, 50%, 80%, 100%": { opacity: "1" },
          "40%": { opacity: "0.2" },
          "60%": { opacity: "0.3" },
        },
        glowPulse: {
          "0%, 100%": {
            textShadow:
              "0 0 10px rgba(0, 217, 255, 0.5), 0 0 20px rgba(0, 217, 255, 0.3)",
          },
          "50%": {
            textShadow:
              "0 0 20px rgba(0, 217, 255, 0.8), 0 0 40px rgba(0, 217, 255, 0.6), 0 0 60px rgba(157, 0, 255, 0.4)",
          },
        },
      },
      borderRadius: {
        squircle: "30% 70% 70% 30% / 30% 30% 70% 70%",
      },
    },
  },
  plugins: [],
};
