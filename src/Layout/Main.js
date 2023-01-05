import React from 'react';
import { Outlet } from 'react-router-dom';
import FullFooter from '../Pages/Shared/Footer/FullFooter/FullFooter';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FullFooter></FullFooter>
        </div>
    );
};

export default Main;