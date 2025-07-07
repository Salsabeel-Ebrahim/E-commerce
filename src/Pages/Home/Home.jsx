import axios from "axios";
import Card from "../../components/Card/Card";
import CategorySlider from "../../components/CategorySlider/CategorySlider";
import MainSlider from "../../components/MainSlider/MainSlider";
import { useEffect, useState } from "react";

import Loading from "../../components/Loading/Loading";

export default function Home() {
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
     <>
    <section className='mt-4  mb-8 min-h-screen '>
    <MainSlider/>

<div className="container my-4">
   <CategorySlider/>
</div>
 
 {
products? <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
 
 {
  products.map((product)=>  <Card productInfo={product} key={product.id}/> )

 }

   </div>  :  <Loading/>
 }
   
  
  
    </section>
 


   </>
  )
}








