import { Swiper, SwiperSlide } from 'swiper/react';
import PreviewBlogChild from '../PreviewBlog/PreviewBlogChild';
import  "../../styles/Swiper.module.sass";
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/autoplay"
import { Autoplay, Pagination, Navigation } from 'swiper';
import { ReactElement } from 'react';
export default function SliderPost(): ReactElement {
   return (
      <><div >
         <Swiper
            speed={1200}
            spaceBetween={30}
            breakpoints={{1400:{slidesPerView: 3},768:{slidesPerView: 2},576:{slidesPerView: 1}}}
    
            autoplay={{
                delay: 2500,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            
            navigation={true}
            modules={[ Autoplay,Pagination, Navigation]}
            className="mySwiper"
         >
            <SwiperSlide style={{display:"flex","justifyContent":"center","alignItems":"center"}}><PreviewBlogChild></PreviewBlogChild></SwiperSlide>
            <SwiperSlide style={{display:"flex","justifyContent":"center","alignItems":"center"}}><PreviewBlogChild></PreviewBlogChild></SwiperSlide>
            <SwiperSlide style={{display:"flex","justifyContent":"center","alignItems":"center"}}><PreviewBlogChild></PreviewBlogChild></SwiperSlide>
            <SwiperSlide style={{display:"flex","justifyContent":"center","alignItems":"center"}}><PreviewBlogChild></PreviewBlogChild></SwiperSlide>
            <SwiperSlide style={{display:"flex","justifyContent":"center","alignItems":"center"}}><PreviewBlogChild></PreviewBlogChild></SwiperSlide>
            <SwiperSlide style={{display:"flex","justifyContent":"center","alignItems":"center"}}><PreviewBlogChild></PreviewBlogChild></SwiperSlide>
            <SwiperSlide style={{display:"flex","justifyContent":"center","alignItems":"center"}}><PreviewBlogChild></PreviewBlogChild></SwiperSlide>
            <SwiperSlide style={{display:"flex","justifyContent":"center","alignItems":"center"}}><PreviewBlogChild></PreviewBlogChild></SwiperSlide>
            <SwiperSlide style={{display:"flex","justifyContent":"center","alignItems":"center"}}><PreviewBlogChild></PreviewBlogChild></SwiperSlide>
         </Swiper>
         </div>
      </>
   );
}
