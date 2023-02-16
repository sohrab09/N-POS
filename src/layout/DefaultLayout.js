import React from 'react'
import AppHeader from '../components/AppHeader/AppHeader'
import AppSidebar from '../components/AppSidebar/AppSidebar'
import '../css/custom.css'
import '../css/responsive.css'
import '../css/style.css'
import '../css/typography.css'

const DefaultLayout = () => {
    return (
        <div className="wrapper">
            <AppHeader />
            <AppSidebar />
        </div>
    )
}

export default DefaultLayout