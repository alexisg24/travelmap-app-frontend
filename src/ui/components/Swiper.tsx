import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

import { ReactNode } from 'react'

export const SwiperComponent = (): ReactNode => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      initialSlide={1}
      centeredSlides
      effect='coverflow'
      grabCursor
      loop
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      breakpoints={{
        768: {
          slidesPerView: 3
        },
        640: {
          slidesPerView: 2
        },
        320: {
          slidesPerView: 1.2
        }
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
    >
      <SwiperSlide>
        <div className='rounded-lg'>
          <img src='https://swiperjs.com/demos/images/nature-1.jpg' className='shadow-gray-50 shadow-5xl rounded-lg' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
      </SwiperSlide>
    </Swiper>
  )
}
