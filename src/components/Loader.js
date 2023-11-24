// MainComponent.jsx
import React, { useState, useEffect } from 'react';
export const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading (replace with your actual loading logic)
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="main-content">
        </div>
      )}
    </div>
  );
};
