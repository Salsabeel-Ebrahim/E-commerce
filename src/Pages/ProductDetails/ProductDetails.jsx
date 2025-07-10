import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Card from './../../components/Card/Card';
import { CartContext } from '../../Context/Cart.context';

export default function ProductDetails() {
  let {id} = useParams()
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState(null)
  const [activeImage, setActiveImage] = useState(null)
  const {addToCart} =   useContext(CartContext)

  useEffect(()=>{
    if(product?.images?.length){
      setActiveImage(product?.images[0])
    }
  },[product])
  async function getSpecificProduct() {
   
   try{
    const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

    setProduct(data.data)
getRelatedProduct(data.data.category._id)


   }catch(error){
    console.log(error);
    
   }
  }

 useEffect(()=>{
  getSpecificProduct()
 }, [id])

  async function getRelatedProduct(category_id) {
   
   try{
  const{data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${category_id}`)

 setRelated(data.data)
   }catch(error){
    console.log(error);
    
   }
  }

  return (
    <>

    {
      product?  
     <div className="container mt-[72px] mb-8 mx-auto p-6 shadow-lg rounded-2xl overflow-hidden px-6  my-6">
  <div className="flex flex-col md:flex-row gap-10 bg-white ">
    
  
    <div className="md:w-1/2 space-y-6">
    
      <img   loading="lazy" 
        src={ activeImage || product?.imageCover} 
        alt={product?.title} 
        className="rounded-2xl w-full max-h-[300px] object-contain bg-gray-50 p-4 shadow-sm" 
      />

     
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={ (swiper)=>{
setActiveImage(product?.images[swiper.realIndex])
        }}
        className="rounded-xl"
      >
        {product?.images?.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img   loading="lazy"
              src={img}
              alt={`slide-${idx}`}
              className="rounded-xl object-contain h-[150px] w-full p-2 bg-white shadow transition-transform hover:scale-105 duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

   
    <div className="md:w-1/2 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="font-medium text-gray-700">{product?.ratingsAverage}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-mainColor">{product?.title}</h2>
        <h3 className="text-lg font-medium text-gray-500">{product?.category.name}</h3>
      </div>

      <p className="text-gray-600 leading-relaxed">{product?.description}</p>
     <p className="text-2xl font-bold text-mainColor">{product?.price} EGP</p>
    
   <button className="mt-4 btn text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 font-semibold shadow-md hover:bg-opacity-90 hover:scale-105 transition-all duration-300"
       onClick={()=>{ addToCart(id) }}
    >
   
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M10 21a1 1 0 100-2 1 1 0 000 2zm8 1a1 1 0 100-2 1 1 0 000 2zM5 4h2l3.6 7.59-1.35 2.45A1 1 0 0010 16h9v-2h-8.42a.25.25 0 01-.23-.15L11 13h7a1 1 0 00.92-.62l3-7A1 1 0 0021 4H5z" />
      </svg>
           Add to Cart </button>

    </div>

  
 
  
  </div>
 <div className="py-5 ">
    <h3 className='text-center text-xl text-mainColor font-semibold mt-5 py-5 '>Related Products</h3>

  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
  {
      related?.map((item)=>(
                      <Card  productInfo={item} key={item._id}/>  )
    )
    }
  </div>
  
 </div>

  
</div>
  : <Loading/>  }
    
    </>
  )
}
