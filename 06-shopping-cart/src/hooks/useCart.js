import { useContext } from 'react'
import { cartContext } from '../context/cart'

export const useCart = () => {
  const cart = useContext(cartContext)

  if (cart === undefined) {
    throw new Error('useCart must be used without a CartProvider ')
  }
  return cart
}
