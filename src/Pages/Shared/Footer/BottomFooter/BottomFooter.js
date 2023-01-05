import React from 'react';
import facebook from '../../../../Assests/Icons/facebook.png';
import linkedin from '../../../../Assests/Icons/linkedin.png';
import github from '../../../../Assests/Icons/github.png';
import { Link } from 'react-router-dom';

const BottomFooter = () => {
    return (
        <div className=' bg-base-200'>
            <footer className="footer py-6 pt-16 container mx-auto text-base-content">
                <div className='w-72'>
                    <span className="text-2xl font-bold">About Us</span>
                    <p className=' text-lg'>
                        Learn With Maruf is a top leading edutech platform for software development. We provide online courses for majors in mobile & web development. Research & development, teaching, and community leading is our vision
                    </p>
                    <div className='flex justify-between items-center mt-2'>
                        <a href="https://web.facebook.com/maruf.hossain.munna01/">
                            <img className='w-10' src={facebook} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/maruf-hossain-munna/">
                            <img className='w-10 mx-6' src={linkedin} alt="" />
                        </a>
                        <a href="https://github.com/maruf-hossain-munna">
                            <img className='w-10' src={github} alt="" />
                        </a>
                    </div>
                </div>
                <div>
                    <span className="text-2xl font-bold">Recommended </span>
                    <Link className='text-xl hover:text-pink-500'> Ecommerce Project </Link>
                    <Link className='text-xl hover:text-pink-500'> MERN Stack </Link>
                    <Link className='text-xl hover:text-pink-500'> Express Back-End</Link>
                    <Link className='text-xl hover:text-pink-500'> Laravel 7&8</Link>

                </div>
                <div>
                    <span className="text-2xl font-bold">Legal</span>
                    <Link className='text-xl hover:text-pink-500'> Privacy Policy </Link>
                    <Link className='text-xl hover:text-pink-500'> Terms & Conditions </Link>
                    <Link className='text-xl hover:text-pink-500'> Refund Policy </Link>
                </div>
                <div>
                    <span className="text-2xl font-bold">Subscribe Now</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="text-xl">Hi, thanks for subscribe with us.</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="Your Email Address" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='divider'>

            </div>
            <footer className="footer container mx-auto text-lg font-semibold footer-center p-4 text-base-content mb-4">
                <div>
                    <p>Copyright © 2023 - All right reserved by Maruf Hossain Munna </p>
                </div>
            </footer>
        </div>
    );
};

export default BottomFooter;