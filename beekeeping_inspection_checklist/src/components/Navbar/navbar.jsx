import React, { useState } from "react";




const NavBar = () => {
  const [isLogin,setIsLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function handleLoginClick() {
    setIsLogin(true);
  }

 
function handleMenuClick() {
    setShowMenu(!showMenu);
  }
  

  return (
    <nav className="flex items-center justify-between flex-wrap p-4 bg-yellow-500 text-white">
      <div className="flex items-center">
        <img
          src="/beekeeping_inspection_checklist/src/assets/Another_one_logo_1020Hivezzz.png"
          alt="1020 Hivezzz logo"
          className="w-12"
        />
        
      </div>
     
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          onClick={handleMenuClick}
        >
            <title>Menu</title>
            <path
              d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"
            />
          
        </button>
      </div>
      
      <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${showMenu ? 'block' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow flex justify-center">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
            Home
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
            Services
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
            Contact
          </a>
        </div>
        <div>
        
        <button onClick={handleLoginClick}>Login</button>
        
         
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
