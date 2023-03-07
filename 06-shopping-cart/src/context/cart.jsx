import { createContext, useState } from 'react'

export const cartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    setCart(prevSate => ([
      ...prevSate,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = product => {
    setCart(prevSate => prevSate.filter(item => item.id !== product.id))
  }

  const clearCart = product => {
    setCart([])
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  )
}
