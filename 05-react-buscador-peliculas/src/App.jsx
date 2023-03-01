import { useCallback, useEffect, useRef, useState } from 'react';
import { Movies } from './componets/Movies';
import { useMovies } from './hooks/useMovies';
import debounce from "just-debounce-it";
import './App.css'

function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFisrtInput = useRef(true)

  useEffect(() => {
    if (isFisrtInput.current) {
      isFisrtInput.current = search === ''
      console.log(isFisrtInput);
      return
    }

    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [search])
  return { search, setSearch, error }
}

const App = () => {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(debounce(search => {
    console.log('search', search);
    getMovies({ search })
  }, 500), [getMovies])

  const handleSubmit = (e) => {
    e.preventDefault()
    // const { query } = Object.fromEntries(new window.FormData(e.target)) Forma no controlada
    // console.log(query)
    getMovies({ search })
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    setSearch(newQuery)
    debounceGetMovies(newQuery)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  useEffect(() => {
    console.log('getMovies render');
  }, [getMovies])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit} >
          <input onChange={handleChange} value={search} name='query' type="text" placeholder='Avengers, Star Wars, The Matrix...' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button >Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando ...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App