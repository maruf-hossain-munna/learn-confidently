import React from 'react';

const DisplayTestimonial = ({ testimonial }) => {
    const { name, img, title, review } = testimonial
    return (
        <div>
            <div className='w-full p-5 bg-white rounded-lg'>
                <div className='flex items-center gap-3'>
                    <div className=''>
                        <img className='w-8 h-8 rounded-full' src={img} alt="" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold"> {name} </h2>
                        <p className='text-sm'> {title} </p>
                    </div>
                </div>
                <p className='text-xs'>{review} </p>
            </div>
        </div>
    );
};

export default DisplayTestimonial;