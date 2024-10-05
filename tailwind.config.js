// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        play: ['Playwrite DE Grund', 'cursive'],
        space: ['Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.25)', // Custom text shadow
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'slide-in': 'slide-in 3s forwards',
        'slide-out': 'slide-out 3s forwards',
        'slide-in-out': 'slide-in 3s forwards, slide-out 3s 3s forwards'
      },
    },
  },
  plugins: [],
}

