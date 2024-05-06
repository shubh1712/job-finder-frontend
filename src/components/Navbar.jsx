import React from 'react';

function Navbar() {
  const handleRefresh = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div className="navbar">
      <h1 className="navbar-header" onClick={handleRefresh}>
        JobDaily
      </h1>
    </div>
  );
}

export default Navbar;
