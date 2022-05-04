import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import LayoutContainerForm from './components/LayoutContainerForm'
import Navbar from './components/Navbar'
import RequireAuth from './components/RequireAuth'
import { UserContext } from './context/UserProvider'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
const App = () => {
  const { user } = useContext(UserContext)

  if (user === false) {
    return <p>Loading...</p>
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path='/' element={<LayoutContainerForm />}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
