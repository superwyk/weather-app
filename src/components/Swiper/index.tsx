import { ReactNode } from 'react';
import { Swiper as NativeSwiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface ISwiperProps {
    data: any[];
    children: (item: any) => ReactNode;
}
function Swiper({ data = [], children }: ISwiperProps) {
    return (
        <NativeSwiper slidesPerView={3}>
            {data.map((item, index) => (
                <SwiperSlide key={index}>{children(item)}</SwiperSlide>
            ))}
        </NativeSwiper>
    );
}

export default Swiper;
