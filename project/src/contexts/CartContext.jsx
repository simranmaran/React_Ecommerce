import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      const savedCart = localStorage.getItem(`cart_${user.id}`)
      if (savedCart) {
        setCartItems(JSON.parse(savedCart))
      }
    } else {
      setCartItems([])
    }
  }, [user])

  const saveCart = (items) => {
    if (user) {
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(items))
    }
  }

  const addToCart = (product, size = 'M', quantity = 1) => {
    const existingItem = cartItems.find(item => 
      item.id === product.id && item.size === size
    )

    let newCartItems
    if (existingItem) {
      newCartItems = cartItems.map(item =>
        item.id === product.id && item.size === size
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
    } else {
      newCartItems = [...cartItems, { ...product, size, quantity }]
    }

    setCartItems(newCartItems)
    saveCart(newCartItems)
  }

  const removeFromCart = (productId, size) => {
    const newCartItems = cartItems.filter(item => 
      !(item.id === productId && item.size === size)
    )
    setCartItems(newCartItems)
    saveCart(newCartItems)
  }

  const updateQuantity = (productId, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, size)
      return
    }

    const newCartItems = cartItems.map(item =>
      item.id === productId && item.size === size
        ? { ...item, quantity }
        : item
    )
    setCartItems(newCartItems)
    saveCart(newCartItems)
  }

  const clearCart = () => {
    setCartItems([])
    if (user) {
      localStorage.removeItem(`cart_${user.id}`)
    }
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}