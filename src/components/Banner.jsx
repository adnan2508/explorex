import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} loop={true} className='mySwiper rounded-3xl'>

                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1484910292437-025e5d13ce87?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='rounded-3xl w-full h-screen'/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='rounded-3xl w-full h-screen'/>            
                </SwiperSlide>

               

                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='rounded-3xl w-full h-screen'/>       
                    </SwiperSlide>
                    
            </Swiper>
        </div>
    );
};

export default Banner;