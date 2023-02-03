import React from 'react';
import { Link } from 'react-router-dom';
import whyChoose from '../../Assests/Images/whyChoose.png';

const WhyChoose = () => {
    return (
        <div className='container mx-auto lg:px-0 px-4'>
            <div className='lg:flex items-center'>
                <div className='lg:w-1/2 '>
                    <img className='' src={whyChoose} alt="" />
                </div>

                <div className='lg:w-1/2'>
                    <h6 className='text-xl font-bold text-secondary'>Why Choose Us</h6>
                    <h3 className='lg:text-4xl text-2xl font-bold my-3'>Learn Something Good, Do Something Better</h3>
                    <p className=''>
                        Learn With Maruf is a top leading edutech platform for software development. We provide online courses for majors in mobile & web development. Research & development, teaching, and community leading is our vision . Our specialty is industry-oriented teaching processes, guidelines, study plans, and classes with resourceful content. Learn confidently with us software industry needs quality developers.
                        <br /> <br />
                        Maruf Hossain Munna is our core instructor. He is working on web & mobile application development for more than 8 years. He started his programming instructor career at Bangladesh ICT Ministry in a software development program. After that, he plays a great role as a software development instructor at CBA-IT, STEPUP-IT, TexLab, and Northbengal IT. Presently he is working at IDLC Finance Ltd as a senior software engineer. Working with country-leading fintech solutions.
                    </p>
                    <div className='mt-12'>
                        <Link to='/signin'>
                            <button className="btn btn-secondary mr-8 btn-outline rounded-full px-10">join today</button>
                        </Link>
                        <button className="btn btn-secondary btn-outline rounded-full px-10">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;