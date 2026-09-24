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
        page: '#f5f3ef',
        ink: '#2e3238',
        accent: '#1c9c89',
        'accent-dark': '#157a6c',
        'accent-soft': '#8fcfc2',
        'accent-tint': '#dceeea',
        muted: '#5c5f65',
        faint: '#6b6e74',
        fainter: '#8a8d93',
        line: '#e5e1d8',
        'line-2': '#dad9d5',
        panel: '#fbf9f5',
        band: '#e8f3f1',
        'band-line': '#cfe4df',
      },
    },
  },
  plugins: [],
};
