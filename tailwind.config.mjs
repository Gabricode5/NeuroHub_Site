/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: 'rgb(var(--color-blue-rgb) / <alpha-value>)',
        'blue-deep': 'rgb(var(--color-blue-deep-rgb) / <alpha-value>)',
        'blue-pale': 'rgb(var(--color-blue-pale-rgb) / <alpha-value>)',
        'blue-soft': 'rgb(var(--color-blue-soft-rgb) / <alpha-value>)',
        lime: 'rgb(var(--color-lime-rgb) / <alpha-value>)',
        ink: 'rgb(var(--color-ink-rgb) / <alpha-value>)'
      },
      fontFamily: {
        sans: ['Atkinson Hyperlegible', 'Arial', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'Times New Roman', 'serif']
      }
    }
  }
};
