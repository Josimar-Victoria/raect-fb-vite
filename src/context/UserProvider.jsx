import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { email, displayName, photoURL, uid } = user
        setUser({ email, displayName, photoURL, uid })
      } else {
        setUser(null)
      }
    })
    return () => unsubscribe()
  }, [])

  const regiterdUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const signOtUser = () => signOut(auth)
  const logout = () => {}

  return (
    <UserContext.Provider
      value={{ user, setUser, logout, regiterdUser, loginUser, signOtUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
