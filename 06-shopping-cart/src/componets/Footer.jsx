import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
import { useCart } from '../hooks/useCart'
import './footer.css'

export const Footer = () => {
  const { filters } = useContext(FiltersContext)
  const { cart } = useCart()
  return (
    <footer className='footer'>
      {/* <h4>Prueba tecnica react</h4> */}
      {/* <span>@suyuc</span> */}
      {/* <h5>Shopping cart caon useContext & useReducer</h5> */}
      {
        JSON.stringify(filters, null, 2)
      }
      {
        JSON.stringify(cart, null, 2)
      }
    </footer>
  )
}
