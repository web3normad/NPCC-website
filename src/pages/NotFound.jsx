import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mt-2">Page Not Found</h2>
      <p className="text-gray-500 mt-4">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-white bg-[#7cc3a1] hover:bg-[#7cc3a1] shadow-md transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
