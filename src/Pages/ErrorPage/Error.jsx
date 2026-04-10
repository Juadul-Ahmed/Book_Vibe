import React from "react";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center space-y-6">
        
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-primary">404</h1>

        {/* Title */}
        <h2 className="text-3xl font-bold">Oops! Page not found</h2>

        {/* Description */}
        <p className="text-base-content/70 max-w-md mx-auto">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline btn-primary"
          >
            Go Back
          </button>

          <a href="/" className="btn btn-primary">
            Go Home
          </a>
        </div>

     
       
      </div>
    </div>
  );
};

export default Error;