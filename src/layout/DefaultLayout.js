import React from 'react'
import AppHeader from '../components/AppHeader/AppHeader'
import AppSidebar from '../components/AppSidebar/AppSidebar'
import './DefaultLayout.scss';

import '../css/custom.css'
import '../css/responsive.css'
import '../css/style.css'
import '../css/typography.css'
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {


    return (
        <div className="body">
            <AppHeader />
            <div className="body-container">
                <div className='sidebar-menu-item'>
                    <AppSidebar />
                </div>
                <div className="body-main">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default DefaultLayout