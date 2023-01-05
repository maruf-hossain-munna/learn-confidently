import React from 'react';
import rabbi from '../../Assests/Images/rabbilVai.png';

const TopHomeBanner = () => {
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse container">
                    <div className='lg:w-1/2'>
                        <img src={rabbi} alt='' className=" rounded-lg" />
                    </div>
                    <div className='lg:w-1/2 pr-16'>
                        <h1 className="lg:text-5xl text-3xl font-bold">Learn Confidently with</h1>
                        <h1 className="lg:text-5xl text-3xl text-pink-600 uppercase mt-3 font-bold">Maruf Hossain</h1>
                        <p className='text-2xl py-8'>Do you become a software developer with us? Learn something good, do something better</p>
                        <div className='mb-4 py-3 px-8 flex justify-between items-center bg-white max-w-[500px] rounded-full shadow-xl hover:shadow-2xl'>
                            <input className='px-3 py-3 focus:outline-none text-xl w-[350px]  ' type="text" placeholder='Searching for...' name="" id="" />
                            <input className="btn btn-secondary rounded-full px-8" type="submit" value="Search" />
                        </div>

                        <div className='flex justify-between items-center pr-16 pl-6 py-4'>
                            <div>
                                <h1 className="text-4xl font-bold">700+</h1>
                                <h4 className="text-lg">Enrolled</h4>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold">4+</h1>
                                <h4 className="text-lg">Courses</h4>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold">60k+</h1>
                                <h4 className="text-lg">Followers</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHomeBanner;