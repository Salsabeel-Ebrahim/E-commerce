import logo from '../../assets/images/freshcart-logo-CC9Ez4_E.svg'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faOpencart } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../../Context/Token.context/Token.context';
import { CartContext } from '../../Context/Cart.context';

export default function Navbar() {
  const { token, setToken } = useContext(TokenContext);
  const { getAllCart, cartInfo } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    getAllCart();
  }, []);

  return (
    <>
      <nav className="bg-[#f3f4f6] shadow-md fixed top-0 right-0 left-0 z-30">
        <div className="mx-auto w-full flex justify-around items-center px-2">
          {/* Mobile Navbar */}
          <div className="relative w-full flex lg:hidden h-16 items-center">
            <div className="absolute w-full inset-y-0 left-0 right-0 flex-col items-center">
              <button
                type="button"
                onClick={() => setMenuOpen(prev => !prev)}
                className="relative mt-1 items-center justify-center rounded-md cursor-pointer p-2 text-black  focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {menuOpen && (
                <div className="absolute top-full left-0 w-screen bg-white shadow-md z-40 py-2 space-y-1" id="mobile-menu">
                  {/* Top icons and auth */}
                  <div className="container flex justify-between px-8 ">
                    {
                      token &&
                          <div className="social-icons items-center flex gap-3 mt-4">
                      <FontAwesomeIcon icon={faFacebook} className="text-xl text-[#1877F2] hover:translate-y-[-4px] transition-transform duration-300" />
                      <FontAwesomeIcon icon={faInstagram} className="text-xl text-[#E1306C] hover:translate-y-[-4px] transition-transform duration-300" />
                      <FontAwesomeIcon icon={faTwitter} className="text-xl text-[#1DA1F2] hover:translate-y-[-4px] transition-transform duration-300" />
                      <FontAwesomeIcon icon={faLinkedin} className="text-xl text-[#0077B5] hover:translate-y-[-4px] transition-transform duration-300" />
                    </div>
                    }
                

                    <div className="items-center flex gap-3">
                      {!token && (
                        <div>
                          <NavLink to="/signup" className="block border-b border-gray-200 px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-mainColor transition duration-200">Signup</NavLink>
                          <NavLink to="/login" className="block border-b border-gray-200 px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-mainColor transition duration-200">Login</NavLink>
                        </div>
                      )}

                      {token && (
                        <>
                          <Link to="/WishList">
                            <FontAwesomeIcon icon={faHeart} className="text-2xl mt-4 hover:text-red-600 duration-300" />
                          </Link>
                          <Link to="/Cart" className="relative mt-4">
                            <FontAwesomeIcon icon={faOpencart} className="text-2xl hover:text-[#0aad0a] duration-300" />
                            <h5 className="absolute bg-mainColor rounded-full text-[12px] w-4 h-4 flex justify-center items-center top-[-13px] right-[-25%] text-white">
                              {cartInfo?.numOfCartItems ?? 0}
                            </h5>
                          </Link>
                          <Link to="/Login">
                            <FontAwesomeIcon
                              icon={faRightFromBracket}
                              onClick={() => {
                                localStorage.removeItem("token");
                                setToken(null);
                              }}
                              className="text-2xl hover:text-[#0aad0a] duration-300 mt-4"
                            />
                          </Link>
                        </>
                      )}
                    </div>
                  </div>

          
              
          
           <div className="w-full">
                    {token &&    <>  <NavLink to="/" className="block border-b border-gray-200 px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-mainColor transition duration-200">Home</NavLink>
                    <NavLink to="/Products" className="block border-b border-gray-200 px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-mainColor transition duration-200">Products</NavLink>
                    <NavLink to="/Categories" className="block border-b border-gray-200 px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-mainColor transition duration-200">Categories</NavLink>
                    <NavLink to="/Brands" className="block border-b border-gray-200 px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-mainColor transition duration-200">Brands</NavLink>
                    <NavLink to="/allorders" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-mainColor transition duration-200">Orders</NavLink>
               </> }
                 </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden  lg:flex h-16 justify-between w-full items-center px-4 md:px-6">
               <div className="flex items-center gap-2 justify-between w-full">
              <img className="h-8 w-auto" src={logo} alt="Fresh cart logo" />
         
            <div className="flex justify-center items-center  gap-3 ">
              <NavLink to="/" className="px-3 py-2 text-sm font-medium">Home</NavLink>
              <NavLink to="/Products" className="px-3 py-2 text-sm font-medium">Products</NavLink>
              <NavLink to="/Categories" className="px-3 py-2 text-sm font-medium">Categories</NavLink>
              <NavLink to="/Brands" className="px-3 py-2 text-sm font-medium">Brands</NavLink>
              <NavLink to="/allorders" className="px-3 py-2 text-sm font-medium">Orders</NavLink>
            </div>

            <div className="flex items-center gap-3  ">
              <FontAwesomeIcon icon={faFacebook} className="text-xl text-[#1877F2]" />
              <FontAwesomeIcon icon={faInstagram} className="text-xl text-[#E1306C]" />
              <FontAwesomeIcon icon={faTwitter} className="text-xl text-[#1DA1F2]" />
              <FontAwesomeIcon icon={faLinkedin} className="text-xl text-[#0077B5]" />
            </div>

            <div className="flex items-center gap-3">
              {!token && (
                <>
                  <NavLink to="/signup" className="px-1 py-2 text-sm font-medium">Signup</NavLink>
                  <NavLink to="/login" className="px-1 py-2 text-sm font-medium">Login</NavLink>
                </>
              )}
              {token && (
                <>
                  <Link to="/WishList">
                    <FontAwesomeIcon icon={faHeart} className="text-2xl hover:text-red-600 duration-300" />
                  </Link>
                  <Link to="/Cart" className="relative">
                    <FontAwesomeIcon icon={faOpencart} className="text-2xl hover:text-[#0aad0a] duration-300" />
                    <h5 className="absolute bg-mainColor rounded-full text-[12px] w-4 h-4 flex justify-center items-center top-[-13px] right-[-25%] text-white">
                      {cartInfo?.numOfCartItems ?? 0}
                    </h5>
                  </Link>
                  <Link to="/Login">
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      onClick={() => {
                        localStorage.removeItem("token");
                        setToken(null);
                      }}
                      className="text-2xl hover:text-[#0aad0a] duration-300"
                    />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
     </div> </nav>
    </>
  );
}
