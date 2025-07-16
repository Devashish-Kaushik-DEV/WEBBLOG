import React from 'react'
import { Button } from './components/ui/button'
import Layout from './Layout/Layout'
import { RouteIndex } from './helpers/RouteName'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './Index'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App