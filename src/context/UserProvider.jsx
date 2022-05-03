import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

//   const login = user => {
//    console.log('perra')
//    setUser(true)
//   }

  const logout = () => {
    console.log('perr0')
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
