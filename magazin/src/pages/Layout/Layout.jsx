import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <div>header</div>
            <Outlet />
            <footer>footer</footer>
        </div>

    )
}

export default Layout