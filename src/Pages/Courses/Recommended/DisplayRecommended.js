import React from 'react';
import { Link } from 'react-router-dom';

const DisplayRecommended = ({course}) => {
    const {name, title, logo, use, id} = course;
    return (
        <div>
            <Link to={`/courses/${id}`}>
                <div className='flex items-center gap-3 shadow-lg bg-slate-100 p-4 rounded-lg hover:shadow-black'>
                    <div className='w-14 h-14 rounded-full p-2  border-2 border-pink-600'>
                        <img className='w-10 rounded-full mx-auto' src={logo} alt="" />
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold mb-2">{name} Development</h4>
                        <p>{title} </p>
                        <p>{use.slice(0, 26)}... </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DisplayRecommended;