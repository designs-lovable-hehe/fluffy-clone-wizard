
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 px-6">
      <div className="text-center max-w-md mx-auto">
        <span className="chip mb-4">404 Error</span>
        <h1 className="heading-1 mb-6">Page Not Found</h1>
        <p className="subheading mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="btn-primary inline-flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          <span>Return to Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
