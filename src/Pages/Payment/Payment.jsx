
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../Context/Cart.context'
import axios from 'axios'
import { TokenContext } from '../../Context/Token.context/Token.context'
  
  export default function Payment() {
   const {cartInfo , clearCart} =  useContext(CartContext)
   const {token} =  useContext(TokenContext)
    const [payment , setPayment] = useState(null)
    const navigate = useNavigate()
 async function makeCashOrder(values){
  const test = {
    shippingAddress : values }
     const options ={
          url:`https://ecommerce.routemisr.com/api/v1/orders/${cartInfo?.cartId}`, 
          method :"POST" ,
          
          data:  test,
        headers:{
          token
        },
    }
    try {
         const {data} = await axios.request(options)
         console.log("makeCashOrder",data);
         clearCart();

         navigate("/allorders")
         
    } catch (error) {
        console.log(error);
        
    }
 }

async function online(values){
   const test = {
    shippingAddress : values }
     const options ={
<<<<<<< HEAD
        url:`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartInfo?.cartId}?url=https://salsabeel-ebrahim.github.io/E-commerce/` , 
        
=======
        url:`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartInfo?.cartId}?url=http://localhost:5173` , 
        // https://salsabeel-ebrahim.github.io/E-commerce/
>>>>>>> cca8dba (fix: adjusted paths, fonts, and Vercel base config)

        method :"POST" ,
        headers :{
          token 
        },
        data : test,
    }
    try {
         const {data} = await axios.request(options)
         location.replace(data.session.url)
        console.log("online",data);
        
    } catch (error) {
        console.log(error);
        
    }}


    const formik = useFormik({
         initialValues : {
        details: "",
        phone: "",
        city: ""
    },
   onSubmit : (values)=>{
       if(payment === "cash"){
           makeCashOrder(values) }
       else if(payment === "online")
           online(values)
   } 
    })
    return (
      <div className='container min-h-[60vh] mt-[70px] flex items-center justify-center'>
          <form className=" flex flex-col justify-center space-y-3 w-full" onSubmit={formik.handleSubmit} >
         <div className="flex gap-2 justify-center items-center">
<h2 className='text-3xl font-bold text-mainColor mb-4 tracking-wide text-center'>
  Fill your details</h2>

     </div>   
<div className="my-2">
 <input type="text" className='input w-full '   value={formik.values.city}
  onChange={formik.handleChange}
 name='city' placeholder="Enter your city" />

 </div>
     
 <div className="my-2 ">
 <input type="tel" className='input w-full '   value={formik.values.phone}
  onChange={formik.handleChange}
 name='phone' 
  placeholder="Enter your phone" />
 </div>
 <div className="my-2 ">
  <textarea name="details" id="" className='input w-full '
   value={formik.values.details}
  onChange={formik.handleChange}
  placeholder='details' ></textarea>
 </div>

<div className="my-2 flex gap-3 ">
    <Link to="">
    <button type='submit' onClick={()=>{setPayment("cash")  , formik.handleSubmit();} } className='btn w-fit py-1 px-2 font-semibold'>
        CASH ORDER
   </button>
    </Link>
    <Link to="">
    <button type='submit' onClick={ ()=>{setPayment("online")  , formik.handleSubmit();} } className='btn w-fit py-1 bg-blue-600 hover:bg-blue-700 px-2 font-semibold'>
        ONLINE PAYMENT
   </button>
    </Link>
  
  </div> 
   
  </form>
      </div>
    )
  }
  