import { Link } from 'react-router-dom';

import type { Component } from '@/types';

const NotFound: Component = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-lg mb-4">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
    <Link to="/" className="text-blue-500 hover:underline">
      Go to Home
    </Link>
  </div>
);

export default NotFound;
