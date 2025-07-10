import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide1 from '../../assets/images/SliderImage12-CxeAzYXu.jpg'
import slide2 from '../../assets/images/SliderImage13-DZxbnV6L.jpg'


import slide4 from '../../assets/images/slider-image-2.jpeg'
import slide5 from '../../assets/images/slider-image-3.jpeg'
import slide3 from '../../assets/images/home-slider-1.png'
export default function MainSlider() {
  return (
    <>


    <div className="container mt-[82px] grid grid-cols-12">
  <div className="col-span-12 md:col-span-8">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 2500 }}
      loop={true}
    >
      {[slide4, slide5, slide3].map((img, idx) => (
        <SwiperSlide key={idx}>
          <img
            loading="lazy"
            src={img}
            alt={`slide-${idx}`}
            className="w-full h-[400px] object-fill md:h-[400px] lg:h-[500px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  <div className="images col-span-12 md:col-span-4 flex flex-col  h-[600px] md:h-[400px] lg:h-[500px]">
    <img loading="lazy" src={slide1} alt="slide1" className=" h-1/2 w-fill object-cover"/>
    <img loading="lazy" src={slide2} alt="slide2" className="h-1/2 w-fill object-cover"/>
  </div>
</div>

    </>
  )
}
