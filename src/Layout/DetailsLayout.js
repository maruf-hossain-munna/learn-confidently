import React from 'react';
import { Outlet } from 'react-router-dom';

const DetailsLayout = () => {
    return (
        <div>
            
            <div className='grid grid-cols-3 '>
                <div>

                </div>

                <div className=''>
                    <Outlet></Outlet>
                </div>

                <div>

                </div>
            </div>

        </div>
    );
};

export default DetailsLayout;