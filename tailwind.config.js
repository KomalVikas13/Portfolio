/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        play: ['Playwrite DE Grund', 'cursive']
      },
      boxShadow: {
        'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.25)', // Custom text shadow
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        typing: {
          '0%': { width: '0ch', opacity: '0' }, // Start invisible and no text
          '1%': { opacity: '1' }, // Fade in right at the start
          '100%': { width: '26ch', opacity: '1' }, // Fully typed and visible
        },
        erasing: {
          '0%': { width: '26ch', opacity: '1' }, // Fully typed and visible
          '99%': { opacity: '1' }, // Keep visible until almost done
          '100%': { width: '0ch', opacity: '0' }, // Fully erased and invisible
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' }, // Cursor blink effect
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        animation: {
          typing: 'typing 4s steps(26) forwards',  // Typing animation
          erasing: 'erasing 2s steps(26) forwards', // Erasing animation
          blink: 'blink 1s infinite step-end',      // Cursor blink animation
        }, // Adjust duration as needed
      },
    },
  },
  plugins: [],
}