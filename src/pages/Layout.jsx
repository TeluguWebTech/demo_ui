import React from 'react'
import { HeaderComp } from '../components/HeaderComp'
import Dashboard from '../components/Dashboard'
import SidebarComp from '../components/SidebarComp'

const Layout = () => {
  return (
    <div>
        {/* <HeaderComp /> */}
     <div className="flex">
     {/* <Dashboard /> */}
     <SidebarComp />
     </div>
    </div>
  )
}

export default Layout
