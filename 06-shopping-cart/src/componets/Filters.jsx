import { useId, useContext } from 'react'
import './Filters.css'
import { FiltersContext } from '../context/filters'

export function Filters () {
  const { setFilters, filters } = useContext(FiltersContext)

  // const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    // setMinPrice(event.target.value)

    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleCahngeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input type='range' id={minPriceFilterId} min='0' max='1000' onChange={handleChangeMinPrice} value={filters.minPrice} />
        <span>{filters.minPrice} </span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleCahngeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portatiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
