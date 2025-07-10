import React, { useContext, useEffect } from 'react'
import WishItem from "../../components/WishItem/WishItem";
import Loading from '../../components/Loading/Loading'
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../Context/WishList.context';
export default function WishList() {

  
 const {getAllWishlist , WishlistInfo  } = useContext(WishlistContext)
     
useEffect(()=>{
getAllWishlist()
} , [])
  return (
    <>  
 {  WishlistInfo? 
    <div className="container pb-8 pt-[70px] min-h-[70vh]">
     { WishlistInfo.count === 0 || WishlistInfo.data.length === 0 ?
      <div className="container min-h-[70vh] py-8 flex items-center ">
   <div className="border-2 border-mainColor text-center py-12 px-4 rounded-lg w-full">
  <p className="text-lg text-gray-800 mb-6">There are not items yet.</p>
 <Link to="/"> 
   <button className="btn text-white font-medium text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-green-600 transition">
  ADD YOUR FIRST PRODUCT TO Wishlist
</button>

  </Link>
   </div>
     </div>

 :    (
            WishlistInfo.data.map((item)=>(
           <WishItem key={item._id} itemInfo={item} />    ) ))
     }  
  </div> 
               : <Loading/> }
    </>
  )
}
