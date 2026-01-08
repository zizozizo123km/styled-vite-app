/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define a modern, cohesive color palette
        'primary': '#1E3A8A', // Deep Blue (Strong, professional)
        'secondary': '#3B82F6', // Bright Blue (Accent, interactive)
        'accent': '#F59E0B', // Amber/Orange (Highlight, attention-grabbing)
        'background': '#F9FAFB', // Light Gray/Off-White (Clean background)
        'text-dark': '#1F2937', // Dark Gray (Main text)
        'text-light': '#6B7280', // Medium Gray (Subtle text)
      },
      fontFamily: {
        // Use a clean, modern sans-serif font stack
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        // Custom shadows for depth and modern feel
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [
    // Optional: Add official Tailwind plugins if needed (e.g., forms, typography)
    // require('@tailwindcss/forms'),
  ],
}