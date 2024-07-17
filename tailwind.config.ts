import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#050505',
      red: '#D20F22',
      green: {
        300: '#11A37A',
        200: '#16D19D',
      },
      gray: {
        100: '#8288A5', //very light
        200: '#687093', //light
        300: '#444961', //regular
        400: '#1F243B', //dark
      },
      fontWeight: {
        regular: '400',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      container: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
