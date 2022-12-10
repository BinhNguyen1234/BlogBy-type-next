import { Swiper, SwiperSlide } from 'swiper/react';
import PreviewBlogChild from '../PreviewBlog/PreviewBlogChild';
import '../../styles/Swiper.module.sass';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { ReactElement } from 'react';
export default function SliderPost({ data }: any): ReactElement {
   return (
      <>
         <div>
            <Swiper
               speed={800}
               spaceBetween={10}
               breakpoints={{
                  1400: { slidesPerView: 2 },
                  768: { slidesPerView: 1 },
               }}
               autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
               }}
               pagination={{
                  dynamicBullets: true,
                  clickable: true,
               }}
               navigation={true}
               modules={[Autoplay,Pagination, Navigation]}
               className="mySwiper"
            >
               {data.map((post: any, index: number) => {
                  return (
                     <SwiperSlide
                        key={index}
                        style={{
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                        }}
                     >
                        <PreviewBlogChild>{{ data: post }}</PreviewBlogChild>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </>
   );
}
