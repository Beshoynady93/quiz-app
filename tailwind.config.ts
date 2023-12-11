import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'wack-a-mole-bg': 'url(/wack-a-mole-bg.png)',
      },
      animation: {
        'summon-mole': 'summonMole 5s ease',
      },
      keyframes: {
        summonMole: {
          '0%': {
            transform: 'translateY: -100%',
          },
          '100%': {
            transform: 'translateY: 100%',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
