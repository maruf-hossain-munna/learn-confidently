import React, { useEffect, useState } from 'react';
import DisplayTopCourse from './DisplayTopCourse';

const TopCourses = () => {
    const [courses, setCourses] = useState([])
    useEffect( () =>{
        fetch('https://learn-confidently-server.vercel.app/courses')
        .then( res => res.json())
        .then( data => setCourses(data))
    } ,[])
    console.log(courses);

    return (
        <div className='mt-24 mb-16 container mx-auto'>
            <h4 className='text-xl font-bold text-secondary text-center mb-3'>Our Courses</h4>
            <h2 className='lg:text-5xl text-3xl font-semibold text-center mb-12'>Our Top-Picked Courses</h2>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-14'>
                {
                    courses.map( course => <DisplayTopCourse
                        key={course.id}
                        course={course}
                    ></DisplayTopCourse>)
                }
            </div>
        </div>
    );
};

export default TopCourses;