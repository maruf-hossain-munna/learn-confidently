import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayRecommended from './DisplayRecommended';

const Recommended = () => {
    const [courses, setCourses] = useState([])
    useEffect( () =>{
        fetch('https://learn-confidently-server.vercel.app/courses')
        .then( res => res.json())
        .then( data => setCourses(data))
    } ,[])
    // console.log(courses);
    return (
        <div className='container mx-auto mb-10'>
            <h2 className='lg:text-5xl text-3xl font-semibold my-8'>Recommended</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    courses.map(course =><DisplayRecommended
                        key={course.id}
                        course={course}
                    ></DisplayRecommended>)
                }
            </div>
        </div>
    );
};

export default Recommended;