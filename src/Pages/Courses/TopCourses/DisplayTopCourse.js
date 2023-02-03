import React from 'react';
import { Link } from 'react-router-dom';

const DisplayTopCourse = ({ course }) => {
    const { name, id, bannerImg, description, type, price, mentorName, mentorTitle, mentorImg } = course;
    return (
        <div>
            <Link to={`/courses/${id}`}>
                <div className='lg:flex items-center gap-6 p-5 rounded-lg shadow-lg hover:shadow-black'>
                    <div>
                        <img className='rounded-md' src={bannerImg} alt="" />
                    </div>

                    <div>
                        <h4 className="uppercase w-24 ">{type} </h4>
                        <h3 className='text-xl font-bold'>{name} Development </h3>
                        <p className='text-xs mt-2 mb-4'>{description} </p>

                        <div className='flex items-center gap-3 mb-3'>
                            <div className='w-12 h-12 rounded-full border-2 border-pink-500'>
                                <img className='w-8 rounded-full p-2 mx-auto' src={mentorImg} alt="" />
                            </div>
                            <div>
                                <p className='text-xl font-semibold'> {mentorName} </p>
                                <p className='text-sm'> {mentorTitle}</p>
                            </div>
                        </div>
                        <hr />
                        <h4 className='text-xl font-semibold'> <span className='text-pink-500'>{price}</span> BDT </h4>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DisplayTopCourse;