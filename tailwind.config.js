/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IRANSansX', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Cascadia Code', 'Courier New', 'monospace'],
      },
      colors: {
        bg:           '#0a0a0a',
        surface:      '#161616',
        border:       '#242424',
        accent:       '#3b82f6',
        text:         '#ededed',
        muted:        '#a0a0a0',
        subtle:       '#666666',
        gold:         '#f59e0b',
        success:      '#22c55e',
      }
    },
  },
  plugins: [],
}
