"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Autoplay } from 'swiper/modules';

export default function LandingSwiper() {
  return (
    <Swiper
      effect={'coverflow'}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image width={300} height={300} alt='image' src="/images/swiper-1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={300} height={300} alt='image' src="/images/swiper-2.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={300} height={300} alt='image' src="/images/swiper-3.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={300} height={300} alt='image' src="/images/swiper-4.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={300} height={300} alt='image' src="/images/swiper-5.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={300} height={300} alt='image' src="/images/swiper-6.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={300} height={300} alt='image' src="/images/swiper-7.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={300} height={300} alt='image' src="/images/swiper-8.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width={300} height={300} alt='image' src="/images/swiper-9.png" />
      </SwiperSlide>
      {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
    </Swiper>
  )
}