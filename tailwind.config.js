/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0DB14B',
        appBackground: '#F5F5F5',
        input: '#F5F6FF',
        inputBorder: '#E6E8FA',
        disabled: '#949597',
      },
    },
  },
  plugins: [],
};
