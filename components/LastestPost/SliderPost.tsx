import { Swiper, SwiperSlide } from 'swiper/react';
import PreviewBlogChild from '../PreviewBlog/PreviewBlogChild';
import { useDispatch } from 'react-redux';
import { SEND } from '../../feature/handleProgressBar';
import '../../styles/Swiper.module.sass';
import Link from 'next/link';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { ReactElement } from 'react';
export default function SliderPost({ data }: any): ReactElement {
   const dispatch = useDispatch();
   const setProgressBarSEND = () => {
      dispatch(SEND(null));
   };
   return (
      <>
         <div>
            <Swiper
               speed={900}
               spaceBetween={10}
               breakpoints={{
                  769: { slidesPerView: 2 },
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
               modules={[Autoplay, Pagination, Navigation]}
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
                        <Link href={`blog/${post.url}`}>
                           <a
                              onClick={setProgressBarSEND}
                              style={{
                                 textDecoration: 'none',
                                 color: 'initial',
                              }}
                           >
                              <PreviewBlogChild>
                                 {{ data: post }}
                              </PreviewBlogChild>
                           </a>
                        </Link>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </>
   );
}
