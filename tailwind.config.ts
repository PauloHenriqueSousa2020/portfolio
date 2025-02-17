import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'background-secondary': 'var(--background-secondary)',

        text: 'var(--text)',
        'text-secondary': 'var(--text-secondary)',

        border: 'var(--border)',

        shadow: 'var(--shadow)',

        system: 'var(--system)',
        'system-secondary': 'var(--system-secondary)',

        'tic-tac-toe-finish': 'var(--tic-tac-toe-finish)',
        'tic-tac-toe-color': 'var(--tic-tac-toe-color)',
      }
    },
  },
  plugins: [],
} satisfies Config;