import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CategorySlider() {
  const [categories , setCategories] = useState(null)
 async function getAllCategories(){
    const options = {
      method: "GET",
      url: "https://ecommerce.routemisr.com/api/v1/categories",

    }
    const {data} = await axios.request(options)
 
setCategories(data.data)
  }
 useEffect(()=>{ 
  getAllCategories()} , [])
 
  return (
    <> 
{
categories ? 
     <Swiper   modules={[Autoplay]} spaceBetween={0} slidesPerView={8} 
     autoplay={{ delay: 2000 }} loop={true}>
      
 {categories.map((category) => (
            <SwiperSlide key={category._id}>
              <img src={category.image}  loading="lazy" alt={category.name} className='h-44 object-fill w-[100%]' />
              <h2 className='text-center'>{category.name}</h2>
            </SwiperSlide>
          ))}

            </Swiper>
       : <p className='mt-1'>loadinggggggggg</p>
}

   
    </>
  )
}
