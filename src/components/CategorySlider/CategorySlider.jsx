import axios from 'axios'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Loading from './../Loading/Loading';
import { useQuery } from '@tanstack/react-query';

export default function CategorySlider() {
 
 async function getAllCategories(){
    const options = {
      method: "GET",
      url: "https://ecommerce.routemisr.com/api/v1/categories",

    }
    return await axios.request(options)

  }
  const {data , isLoading } = useQuery({
  queryKey : ['CategorySlider'],
  queryFn : getAllCategories ,
  staleTime : 43200000,
  refetchOnMount:true,
   cacheTime: 86400000 

 })

 if(isLoading){
  return <Loading/> }
 
 
 
  return (
    <> 

     <Swiper   
     modules={[Autoplay]} 
      spaceBetween={0} 
    autoplay={{ delay: 2000 }} 
    loop={true}
        breakpoints={{
      0: {
        slidesPerView: 3, 
      },
      640: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 6, 
      },
      1024: {
        slidesPerView: 8, 
      },
    
    }}
     
     >
      
 {data.data.data.map((category) => (
            <SwiperSlide key={category._id}>
              <img src={category.image}  loading="lazy" alt={category.name} className='h-44 object-fill w-[100%]' />
              <h2 className='text-center'>{category.name}</h2>
            </SwiperSlide>
          ))}

            </Swiper>
 
   
    </>
  )
} 
