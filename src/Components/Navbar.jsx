import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useProduct } from '../Context/ProductContext'
import logo from "../assets/logo.png"
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { useCart } from '../Context/CartContext'



const Navbar = () => {
  const { categories } = useProduct();
  const { items } = useCart();
  const location = useLocation();


  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null)

  const toggleMenu = () => {
    setMenuVisible(prevVisible => !prevVisible);
    // if (menuRef.current) {
    //   setMenuVisible(prevVisible => !prevVisible);
    //   setToggleClicked(true)
    // } else {
    //   setMenuVisible(prevVisible => !prevVisible);
    //   setToggleClicked(false)
    // }

  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <header className="w-full bg-gray-800 text-white shadow-md   z-50">
      <div className="container mx-auto flex items-center justify-between gap-10 p-4">

        <nav className="bg-white border-gray-200 lg:hidden dark:bg-gray-800 dark:border-gray-700">
          <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
            ref={buttonRef}

          >
            <svg className="w-6 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          {menuVisible && (
            <div ref={menuRef} className="block z-10 w-full left-2/4 -translate-x-1/2 absolute lg:hidden" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50   rtl:space-x-reverse    dark:bg-gray-800  dark:border-gray-700">
                <li>
                  <Link to="/"
                    onClick={toggleMenu}
                    className={`block py-2 px-3 text-white hover:bg-blue-700  rounded md:bg-transparent  dark:text-white " aria-current="page ${location.pathname === "/" && " bg-blue-600"}`}
                  >
                    Home
                  </Link>
                </li>
                {categories &&
                  categories.map((item) => (
                    <li key={item}>
                      <Link
                        onClick={toggleMenu}
                        to={`/${item.replace(/\s/, "-").toLowerCase()}`}
                        className={`block py-2 px-3 text-white hover:bg-blue-700  rounded md:bg-transparent  dark:text-white " aria-current="page ${location.pathname === "/" + item.replace(/\s/, "-").toLowerCase() && " bg-blue-600"}`}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </nav>




        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-10" />
        </Link>

        <div className=' items-center justify-between gap-10 hidden lg:flex'>
          <div >
            <Link
              className={`text-lg hover:text-gray-400 ${location.pathname === "/" && " text-blue-600"}`}
              to={`/`}
            >
              <h1 className="truncate">All Product</h1>
            </Link>
          </div>
          {categories &&
            categories.map((item) => (
              <div key={item}>
                <Link
                  className={`text-lg hover:text-gray-400 ${location.pathname === "/" + item.replace(/\s/, "-").toLowerCase() && " text-blue-600"}`}
                  to={`/${item.replace(/\s/, "-").toLowerCase()}`}
                >
                  <h1 className="truncate">{item}</h1>
                </Link>
              </div>
            ))}
        </div>

        <div className="relative">
          <Link to="/cart" className="flex items-center space-x-2 hover:text-gray-400">
            <ShoppingCartIcon className="h-10 w-10" />
            {items.length > 0 && (
              <span className="absolute top-0 right-0 inline-block w-5 h-5 text-center bg-red-500 text-white text-xs font-bold rounded-full">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </div >
    </header >
  );
};



export default Navbar;
