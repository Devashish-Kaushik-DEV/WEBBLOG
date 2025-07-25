import React from 'react'
import { Button } from './components/ui/button'
import Layout from './Layout/Layout'
import { RouteIndex, RouteSignUp, RouteSignIn } from './helpers/RouteName'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout />}>
          <Route index element={<Index />} />
        </Route>

        <Route path={RouteSignIn} element={<SignIn />} />
        <Route path={RouteSignUp} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App