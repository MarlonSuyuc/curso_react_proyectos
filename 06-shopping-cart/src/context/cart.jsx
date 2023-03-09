import { createContext, useReducer, useState } from 'react'
import { cartInicialState, cartReducer } from '../reducers/cart'

export const cartContext = createContext()

// Con el hook -------'useReducer'-------
function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInicialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { state, addToCart, removeFromCart, clearCart }
}

export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
  return (
    <cartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart
    }}
    >
      {children}
    </cartContext.Provider>
  )
}

// Con el hook -------'useContext'-------

// export const cartContext = createContext()

// export function CartProvider ({ children }) {
//   const [cart, setCart] = useState([])

//   // const addToCart = product => {
//   //   const productInCartIndex = cart.findIndex(item => item.id === product.id)

//   //   if (productInCartIndex >= 0) {
//   //     const newCart = structuredClone(cart)
//   //     newCart[productInCartIndex].quantity += 1
//   //     return setCart(newCart)
//   //   }

//   //   setCart(prevSate => ([
//   //     ...prevSate,
//   //     {
//   //       ...product,
//   //       quantity: 1
//   //     }
//   //   ]))
//   //   // setCart([...cart, { ...product, quantity: 1 }])
//   // }
//   // console.log(cart)

//   // const removeFromCart = product => {
//   //   // setCart(cart.filter(item => item.id !== product.id))
//   //   setCart(prevSate => prevSate.filter(item => item.id !== product.id))
//   // }

//   // const clearCart = product => {
//   //   setCart([])
//   // }

//   return (
//     <cartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
//       {children}
//     </cartContext.Provider>
//   )
// }
