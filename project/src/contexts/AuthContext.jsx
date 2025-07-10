import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem('girlsShopUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('girlsShopUsers') || '[]')
    const user = users.find(u => u.email === email && u.password === password)
    
    if (user) {
      const userWithoutPassword = { ...user }
      delete userWithoutPassword.password
      setUser(userWithoutPassword)
      localStorage.setItem('girlsShopUser', JSON.stringify(userWithoutPassword))
      return { success: true }
    }
    
    return { success: false, error: 'Invalid email or password' }
  }

  const signup = (name, email, password, phone) => {
    const users = JSON.parse(localStorage.getItem('girlsShopUsers') || '[]')
    
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'User already exists' }
    }
    
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      phone,
      createdAt: new Date().toISOString()
    }
    
    users.push(newUser)
    localStorage.setItem('girlsShopUsers', JSON.stringify(users))
    
    const userWithoutPassword = { ...newUser }
    delete userWithoutPassword.password
    setUser(userWithoutPassword)
    localStorage.setItem('girlsShopUser', JSON.stringify(userWithoutPassword))
    
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('girlsShopUser')
  }

  const value = {
    user,
    login,
    signup,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}