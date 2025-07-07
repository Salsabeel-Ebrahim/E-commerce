import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading'
import Card from '../../components/Card/Card'

export default function Products() {
      const [products ,setProduct] = useState()
 async function getAllProducts(){
  
const options ={
  method: "GET" , 
  url : "https://ecommerce.routemisr.com/api/v1/products"
}
const {data} = await axios.request(options)

setProduct(data.data)
  }
useEffect(()=>{ 
 getAllProducts()} , [])

  return (
    <div className='container pb-8'>

  <div className="flex justify-center items-center py-4">
  <h2 className="relative font-bold text-lg text-mainColor text-center mb-8">
     Products
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-[2px] bg-mainColor opacity-50"></span>
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-16 h-[2px] bg-mainColor opacity-50"></span>
  </h2>
</div>

  {
    products? <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
     
     {
      products.map((product)=>  <Card productInfo={product} key={product.id}/> )
    
     }
    
       </div>  :  <Loading/>
     }
       
    </div>
  )
}
