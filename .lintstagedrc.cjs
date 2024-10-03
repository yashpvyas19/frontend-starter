module.exports = {
  'src/**/*.{cjs,js,jsx,ts,tsx}': [
    'pnpm --silent lint:fix',
    'pnpm --silent prettier:fix --log-level silent',
  ],
};
