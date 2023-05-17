import { Outlet } from 'react-router-dom'

import React from 'react'

{
  console.log("Layout.js");
  
} 

export const Layout = () => {
  return (
    <main>
        <Outlet/>
    </main>
  )
}

export default Layout
