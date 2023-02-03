import React from 'react';
import Recommended from '../Courses/Recommended/Recommended';
import TopCourses from '../Courses/TopCourses/TopCourses';
import Testimonials from '../Shared/Testimonials/Testimonials';
import TopHomeBanner from './TopHomeBanner';
import WhyChoose from './WhyChoose';

const Home = () => {
    return (
        <div>
            <TopHomeBanner></TopHomeBanner>
            <Recommended></Recommended>
            <WhyChoose></WhyChoose>
            <TopCourses></TopCourses>
            {/* <Testimonials></Testimonials> */}
        </div>
    );
};

export default Home;