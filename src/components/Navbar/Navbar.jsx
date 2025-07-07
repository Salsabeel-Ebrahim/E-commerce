import logo from '../../assets/images/freshcart-logo-CC9Ez4_E.svg'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter  , faOpencart } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {  faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Signup from './../../Pages/Signup/Signup';
import { useContext, useEffect } from 'react';
import { TokenContext } from '../../Context/Token.context/Token.context';
import { CartContext } from '../../Context/Cart.context';

export default function Navbar() {
   const {token , setToken} = useContext(TokenContext)
   const {getAllCart , cartInfo  } = useContext(CartContext)
     useEffect(()=>{
             getAllCart()
     } , [])
  return (
    <>
      <nav className="bg-[#f3f4f6] shadow-md">
        <div className="mx-auto w-full flex justify-around items-center px-2 sm:px-6 lg:px-8">
          <div className="relative   flex h-16 items-center ">
             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"   >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                {/* Menu closed icon */}
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                  

                {/* Menu open icon */}

           
              </button>
            </div>  

            <div className="flex  items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img className="h-8 w-auto" src={logo} alt="Fresh cart logo" />
              </div>
{
  token?   <div className="hidden sm:ml-6 sm:block">
                <div className="Nav-links flex space-x-4">
                  <NavLink to="/" className="rounded-md px-3 py-2 text-sm font-medium">
                    Home
                  </NavLink>
                  <NavLink to="/Products" className="rounded-md px-3 py-2 text-sm font-medium">
                    Products
                  </NavLink>
                  <NavLink to="/Categories" className="rounded-md px-3 py-2 text-sm font-medium">
                    Categories
                  </NavLink>
                  <NavLink to="/Brands" className="rounded-md px-3 py-2 text-sm font-medium">
                    Brands
                  </NavLink>
                  <NavLink to="/Orders" className="rounded-md px-3 py-2 text-sm font-medium">
                    Orders
                  </NavLink>
                </div>
              </div> : null
}
            

  

            </div>

          </div>

    <div className="social-icons items-center flex gap-3 ">
      
       <FontAwesomeIcon icon={faFacebook} className="text-xl hover:translate-y-[-4px] text-[#1877F2] transition-transform duration-300"  />
       <FontAwesomeIcon icon={faInstagram} className="text-xl hover:translate-y-[-4px] text-[#E1306C] duration-300 transition-transform" />
       <FontAwesomeIcon icon={faTwitter} className="text-xl hover:translate-y-[-4px] text-[#1DA1F2] duration-300 transition-transform" />
       <FontAwesomeIcon icon={faLinkedin} className="text-xl hover:translate-y-[-4px] text-[#0077B5] duration-300 transition-transform" />
            
             </div>

             <div className="items-center flex gap-3">
{
  token  ? null : <div className=""> 
    <NavLink to="/signup" className="rounded-md px-1 py-2 text-sm font-medium">Signup </NavLink>
   <NavLink to="/login" className="rounded-md px-1 py-2 text-sm font-medium">Login </NavLink>
</div>  
}
<Link to="/WishList">
<FontAwesomeIcon icon={faHeart} className="text-2xl transition-colors hover:text-red-600 duration-300  " />

</Link>
 
<Link to="/Cart" className='relative'>
<FontAwesomeIcon icon={faOpencart} className="text-2xl transition-colors hover:text-[#0aad0a] duration-300 " /> 
<h5 className='absolute bg-mainColor rounded-full w-4 h-4 flex justify-center items-center top-[-15px] right-[-25%] text-white'>
  

     {cartInfo?.numOfCartItems ?? 0}
  </h5>
</Link>

{
  
  token  ? 
  <Link to="/Login">
<FontAwesomeIcon icon={faRightFromBracket}
onClick={()=>{
    localStorage.removeItem("token");
    setToken(null)

}}
className="text-2xl transition-colors hover:text-[#0aad0a] duration-300 " /> 

</Link> : null
  
}


 </div>
         
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink to="#" className="rounded-md px-3 py-2 text-sm font-medium">
              Home
            </NavLink>
            <NavLink to="#" className="rounded-md px-3 py-2 text-sm font-medium">
              Products
            </NavLink>
            <NavLink to="#" className="rounded-md px-3 py-2 text-sm font-medium">
              Categories
            </NavLink>
            <NavLink to="#" className="rounded-md px-3 py-2 text-sm font-medium">
              Brands
            </NavLink>
            <NavLink to="#" className="rounded-md px-3 py-2 text-sm font-medium">
              Orders
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
