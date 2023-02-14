import React, { useState } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginClick() {
    setIsLoggedIn(true);
  }

  function handleLogoutClick() {
    setIsLoggedIn(false);
  }

  return (
    <nav className="flex items-center justify-between p-4 bg-yellow-500 text-white">
      <div className="flex items-center">
        <img
          src="https://1020hivezzz.com/logo.png"
          alt="1020 Hivezzz logo"
          className="w-12"
        />
        <h2 className="ml-4 text-xl font-bold">1020 Hivezzz</h2>
      </div>
      <div>
        {isLoggedIn ? (
          <button
            className="bg-black px-4 py-2 rounded-full text-white hover:bg-white hover:text-black"
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-black px-4 py-2 rounded-full text-white hover:bg-white hover:text-black"
            onClick={handleLoginClick}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;