import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
export function Cart () {
  const cartCheckboxId = useId()

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' hidden id={cartCheckboxId} />
      <aside className='cart'>
        <ul>
          <li>
            <img src='https://i.dummyjson.com/data/products/2/thumbnail.jpg' alt='Iphone' />
            <div>
              <strong>iphone</strong> - 1499
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
