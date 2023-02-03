import React from 'react';
import CoursesBanner from '../CoursesBanner/CoursesBanner';
import Recommended from '../Recommended/Recommended';
import TopCourses from '../TopCourses/TopCourses';

const FullCourses = () => {
    return (
        <div className='container mx-auto'>
            <CoursesBanner></CoursesBanner>
            <Recommended></Recommended>
            <TopCourses></TopCourses>
        </div>
    );
};

export default FullCourses;