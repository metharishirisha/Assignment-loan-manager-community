
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-sm max-w-md">
        <h1 className="text-6xl font-bold text-loan-green">404</h1>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-loan-green hover:bg-opacity-90">
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
