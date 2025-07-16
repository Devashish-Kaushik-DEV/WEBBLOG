import AppSidebar from '@/components/ui/AppSidebar'
import Footer from '@/components/ui/Footer'
import { SidebarProvider } from '@/components/ui/sidebar'
import Topbar from '@/components/ui/Topbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <SidebarProvider>
        <Topbar />
        <AppSidebar />
        <main>
            <Outlet />
            <Footer />
        </main>
    </SidebarProvider>
  )
}

export default Layout

