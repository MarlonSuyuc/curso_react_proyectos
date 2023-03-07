// Pasos para un Contexto
// 1. crearlo
// 2. proveerlo
// 3. consumirlo
import { createContext, useState } from 'react'

// crear el contexto (Contexto a consumir en el main.jsx)
export const FiltersContext = createContext()

// crear el provider para proveer el contexto (Este es el que nos provee de acceso  al consumirlo)
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
