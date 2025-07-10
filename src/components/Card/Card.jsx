import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons'

import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/Cart.context';
import { WishlistContext } from '../../Context/WishList.context';
export default function Card({productInfo}) {
  const {addToCart} = useContext(CartContext)
  const {addToWishlist} = useContext(WishlistContext)
  const {id, title, category 
, description , imageCover , price , ratingsAverage} = productInfo
  return (
 
<div className='rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300'>
  <div className="relative group overflow-hidden " tabIndex={0}>
    <img src={imageCover} alt={title}  loading="lazy" className="w-full  transition-transform duration-500 group-hover:scale-105 group-focus:scale-104" />
  
    <div className="absolute inset-0 bg-transparent opacity-0  group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-3">
    <div className="flex gap-2 transform translate-y-110 group-hover:translate-y-0 transition-all duration-400 ">
  <Link className="bg-white text-mainColor hover:bg-mainColor hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
    <FontAwesomeIcon icon={faCartShopping} onClick={
      ()=>{
      addToCart(id)
    }} />
  </Link>

  <Link className="bg-white text-mainColor hover:bg-mainColor hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
    <FontAwesomeIcon icon={faHeart}
     onClick={
      ()=>{
       addToWishlist(id)
    }}

   
    />
  </Link>

  <Link  to ={`/ProductDetails/${productInfo._id}`} className="bg-white text-mainColor hover:bg-mainColor hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
    <FontAwesomeIcon icon={faEye} />
  </Link>
</div>

    </div>
  </div>


 

  <div className="px-4 py-3 space-y-2">
    <h2 className="line-clamp-1 text-2xl font-semibold">{title}</h2>
    <h3 className=" text-base font-semibold text-green-600">{category.name}</h3>
    <p className=" line-clamp-2 text-sm text-gray-600/70">{description}</p>
    <div className="flex justify-between items-center">
      <span className="text-mainColor font-bold">{price} EGP</span>
      <span className="text-yellow-500 flex items-center gap-1">
        <FontAwesomeIcon icon={faStar} className='text-sm' /> {ratingsAverage}
      </span>



    </div>
  </div>
</div>





)
}
