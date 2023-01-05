import React from 'react';
import Testimonials from '../Shared/Testimonials/Testimonials';
import TopHomeBanner from './TopHomeBanner';
import WhyChoose from './WhyChoose';

const Home = () => {
    return (
        <div>
            <TopHomeBanner></TopHomeBanner>
            <WhyChoose></WhyChoose>
            {/* <Testimonials></Testimonials> */}
        </div>
    );
};

export default Home;