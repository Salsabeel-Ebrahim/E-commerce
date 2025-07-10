import React, { useContext, useEffect } from 'react'
import CartItem from '../../components/Cart Item/CartItem'
import { CartContext } from '../../Context/Cart.context'
import Loading from '../../components/Loading/Loading'
import { Link } from 'react-router-dom';
import useOnline from '../../Hooks/useOnline';

export default function Cart() {
 const {getAllCart , cartInfo , clearCart } = useContext(CartContext)
       const online= useOnline()
 useEffect(()=>{
      getAllCart()     } , [])
  return (
    <>  
 {  cartInfo? 
    <div className="container pb-8 pt-[70px] ">
     { cartInfo.numOfCartItems===0 ?
      <div className="container min-h-[70vh] py-8 flex items-center ">
   <div className="border-2 border-mainColor text-center py-12 px-4 rounded-lg w-full">
  <p className="text-lg text-gray-800 mb-6">There are not items yet.</p>
 <Link to="/"> <button className="btn text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition">
    ADD YOUR FIRST PRODUCT TO CART
  </button></Link>
   </div>
     </div>

 : 
        (
            cartInfo.data.products.map((item)=>(
           <CartItem key={item._id} itemInfo={item} />    ) )  
          
             

 )
   
     }  

   {cartInfo.numOfCartItems !== 0 && (
 <div className="w-full border-t-[2px] border-mainColor pt-4 mt-6 bg-white shadow-sm px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
  <div className="flex gap-3 items-center font-cairo">
    <h2 className="text-base text-gray-600 font-medium">Total Price:</h2>
    <span className="text-mainColor text-xl font-extrabold tracking-wide">
      {cartInfo.data.totalCartPrice} L.E
    </span>
  </div>

<div className="flex gap-3">
<Link to="/Payment">
{online? <button className="btn bg-blue-600 hover:bg-blue-700  font-semibold px-5 py-2 ">
    CHECKOUT
  </button> : null }
 
</Link>
 
  <button className="btn bg-red-600 hover:bg-red-700  font-semibold px-5 py-2 "
  onClick={clearCart}>
    CLEAR CART
  </button>
</div>

</div>

)}
  </div> 
               : <Loading/> }
    </>
  )
}
