import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../Navegacion/NavigationBar'
import Header from '../components/Header'


export const LandingLayout = () => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }} />
      <div style={{ paddingTop: '60px' }}>
        {/* Ajusta el paddingTop para que el contenido no se superponga con el Header */}
        <Outlet />
      </div>
      {/* <Footer style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100 }} /> */}
    </div>
  )
}
