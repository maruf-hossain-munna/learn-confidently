import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const Testimonials = () => {
    return (
        <div className='bg-pink-300'>
            <div className='container mx-auto '>
                <div>
                    <p className='font-semibold'>Testimonial</p>
                    <h2 className="text-4xl font-bold">What Thinks Our Community</h2>
                </div>

                <div>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;