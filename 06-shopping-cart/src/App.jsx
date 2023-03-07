import { products as inincialProducts } from './mocks/products.json'
import { Products } from './componets/Products'
import { Header } from './componets/Header'
import { Footer } from './componets/Footer'
import { IS_DEVELOPMENT } from '../config'
import { useFilters } from './hooks/useFilters'
import { Cart } from './componets/Cart'
import { CartProvider } from './context/cart'

function App () {
  const { filtersProducts } = useFilters()
  const filteredProducts = filtersProducts(inincialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
