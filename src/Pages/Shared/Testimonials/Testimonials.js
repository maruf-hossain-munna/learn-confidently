import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import DisplayTestimonial from './DisplayTestimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    console.log(testimonials);

    return (
        <div className='bg-pink-300'>
            <div className='container mx-auto flex items-center'>
                <div className='w-1/2'>
                    <p className='font-semibold'>Testimonial</p>
                    <h2 className="text-4xl font-bold">What Thinks Our Community</h2>
                </div>

                <div className='w-1/2'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {
                            testimonials.map( testimonial => <SwiperSlide key={testimonial.id}>
                                <DisplayTestimonial testimonial={testimonial}
                                ></DisplayTestimonial>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;