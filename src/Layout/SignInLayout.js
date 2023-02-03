import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomFooter from '../Pages/Shared/Footer/BottomFooter/BottomFooter';
import Header from '../Pages/Shared/Header/Header';

const SignInLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <BottomFooter></BottomFooter>
        </div>
    );
};

export default SignInLayout;