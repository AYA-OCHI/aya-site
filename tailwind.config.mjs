/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Zen Kaku Gothic New"', 'sans-serif'],
        body: ['"Noto Sans JP"', 'system-ui', 'sans-serif'],
      },
      colors: {
        page: '#f4f7fb',
        ink: '#10233a',
        accent: '#1667c9',
        'accent-dark': '#0f4b96',
        'accent-soft': '#8fc2f2',
        muted: '#3c536b',
        faint: '#6b8199',
        fainter: '#7b8fa5',
        line: '#eaf0f7',
        'line-2': '#e4ecf5',
        panel: '#f7fafd',
        band: '#eff6fe',
        'band-line': '#dbe7f3',
      },
    },
  },
  plugins: [],
};
