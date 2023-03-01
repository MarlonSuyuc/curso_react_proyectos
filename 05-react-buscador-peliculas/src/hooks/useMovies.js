import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({search, sort}) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)
  // console.log(previousSearch.current);
  

  // useMemo el lo mismo que useCallback solo que el useCallback esta hecha pensada en funciones y simplificar la sintasix

  // con useMemo
  // const getMovies =useMemo(()=>{
  //   return async({search}) =>{
  //     if (search  === previousSearch.current) return
  //      //si search es igual a previousSearch.current entonces no vuelve a hacer la llamada a la API
  
  //     try {
  //       setLoading(true)
  //       setError(null)  
  //       previousSearch.current = search
  //       const newMovies = await searchMovies({search})
  //       setMovies(newMovies)
  //     } catch (e) {
  //       setError(e.message)
  //     }finally{
  //       setLoading(false)
  //     }
  //   }
  // },[]) 

  // con useCallback
  const getMovies =useCallback(async({search}) =>{
      if (search  === previousSearch.current) return //si search es igual a previousSearch.current entonces no vuelve a hacer la llamada a la API
  
      try {
        setLoading(true)
        setError(null)  
        previousSearch.current = search
        const newMovies = await searchMovies({search})
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      }finally{
        setLoading(false)
      }
    },[]) 


  // const sortMovies = sort
  // ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  // : movies
  // console.log('render', sortMovies); // --------> El sortMovies se vuelve a ejecutar cuando cambiamos el change del input y eso no tiene por que pasar entonces vamos  a arreglarlo con useMemo()
  
  const sortMovies = useMemo(()=>{
    console.log('memoSortedMovies');
    
    return sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies  
  } ,[sort,movies])

  return { movies:sortMovies, getMovies, loading }
}