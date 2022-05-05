import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import LayoutContainerForm from './components/layouts/LayoutContainerForm'
import LayoutRequireAuth from './components/layouts/LayoutRequireAuth'

import Navbar from './components/Navbar'

import { UserContext } from './context/UserProvider'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Perfil from './pages/Perfil'
import NotFound from './pages/NotFound'

const App = () => {
  const { user } = useContext(UserContext)

  if (user === false) {
    return <p>Loading...</p>
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LayoutRequireAuth />}>
          <Route index element={<Home />} />
          <Route path='perfil' element={<Perfil />} />
        </Route>

        <Route path='/' element={<LayoutContainerForm />}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
