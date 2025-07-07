import {  faStar, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { useContext } from 'react';
import { WishlistContext } from '../../Context/WishList.context';


export default function WishItem({itemInfo}) {
 const {removeFromWishlist } =  useContext(WishlistContext)
const {imageCover , title , price , ratingsAverage , category , id} = itemInfo


  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-6 items-center md:justify-around bg-gray-100 my-4 p-6 rounded-lg relative shadow-md">

      
      <FontAwesomeIcon 
         icon={faXmark}   onClick={()=>{removeFromWishlist(id)}}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-600 cursor-pointer text-xl" 
      />

     
      <div className="rounded-lg border-[2px] overflow-hidden border-mainColor w-32 h-32">
        <img src={imageCover} alt="Shawl"  loading="lazy" className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col gap-1 text-gray-800 text-center md:text-start">
      <h2 className="text-lg font-semibold">{title}</h2>
      <span className="text-sm">Price: <span className="font-medium">{price} L.E</span></span>
        <span className="text-sm text-yellow-500 flex items-center gap-1 justify-center md:justify-start">
          Rating: {ratingsAverage}
          <FontAwesomeIcon icon={faStar} className='text-xs' /> 
        </span>
        <h3 className="text-sm">
        {category?.name} | <span className='text-mainColor font-medium'>Available</span>
        </h3>
      </div>

    
    </div>
  )
}

