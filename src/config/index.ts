type Environment = 'development' | 'production';

const config = {
  NODE_ENV: import.meta.env.NODE_ENV as Environment,
  VITE_API_URL: import.meta.env.VITE_API_URL as string,
};

export default config;
