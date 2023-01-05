import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assests/Icons/logo'

const Header = () => {

    const menuItems = < >
        <li ><Link to='/'>Home</Link></li>
        <li ><Link to='/blogs'>About</Link></li>
        <li ><Link to='/blogs'>Courses</Link></li>
        <li ><Link to='/blogs'>Contact</Link></li>
        <button className="btn btn-secondary rounded-full px-8 ml-3">Button</button>

    </>

    return (
        <div className='container mx-auto bg-red-600'>
            <div className="navbar bg-base-100 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-2xl"> Learn <span className='text-pink-600 ml-2'> Confidently </span> </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-2 uppercase text-lg font-semibold">
                        {menuItems}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <button className="btn btn-secondary rounded-full px-8">Button</button>
                </div> */}
            </div>
        </div>
    );
};

export default Header;