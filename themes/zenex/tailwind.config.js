/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js,css}",
    "./static/**/*.{html,js,css}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        "border-wave": {
          "0%": {
            "border-radius": "50%"
          },
          "25%": {
            "border-radius": "58% 42% 69% 31% / 38% 61% 39% 62%"
          },
          "50%": {
            "border-radius": "71% 29% 38% 62% / 56% 61% 39% 44%"
          },
          "75%": {
            "border-radius": "41% 59% 66% 34% / 55% 50% 50% 45%"
          },
          "100%": {
            "border-radius": "50%"
          }
        }
      },
      animation: {
        hover: 'pulse 2s linear',
        bw: 'border-wave 8s ease-in-out infinite 0s'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
