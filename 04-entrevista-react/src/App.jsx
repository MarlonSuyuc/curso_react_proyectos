import "../style.css"
import { useEffect, useState } from "react"
import { getRandomFact } from "./services/facts"
import { useCatImage } from "./hooks/useCatImage"

// const CAT_ENPOINT_RANDOM_FACT = "https://catfact.ninja/fact" // esto es para la 1ra y 2da forma
const CAT_PREFIX_IMAGE_URL = `https://cataas.com/`

const App = () => {
  const [fact, setFact] = useState()
  // const [imgUrl, setImgUrl] = useState() // variable de estado utilizado => useCatImage.js en custom hook
  const [factError, setFactError] = useState()
  const { imgUrl } = useCatImage({ fact })
  console.log(imgUrl)

  // ----------primera forma con solo un useEffect----------
  // useEffect(() => {
  //   fetch(CAT_ENPOINT_RANDOM_FACT)
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(data);
  //       const { fact } = data
  //       setFact(fact)
  //       // const primerapalabra = fact.split(" ")[0] // primera palabra
  //       // const primeras3palabra = fact.split(" ").slice(0, 3).join(" ") // primeras 3 palabra
  //       const primeras3palabra = fact.split(" ", 3).join(" ") // primeras 3 palabra

  //       fetch(`https://cataas.com/cat/says/${primeras3palabra}?size=20&color=red&json=true`)
  //         .then(res => res.json())
  //         .then(response => {
  //           // console.log(response);
  //           const { url } = response
  //           // setImgUrl(`https://cataas.com/${url}`) // No hacer esto
  //           setImgUrl(url) // hacerlo directamente en la etiqueta img
  //         })
  //     })
  // }, [])

  // ----------segunda forma con dos useEffect----------
  // useEffect(() => {
  //   fetch(CAT_ENPOINT_RANDOM_FACT)
  //     .then(res => {
  //       console.log(res)
  //       if (!res.ok) throw new Error("Error fetching fact")
  //       return res.json()
  //     })
  //     .then(data => {
  //       const { fact } = data
  //       setFact(fact)
  //     })
  //     .catch((err) => {
  //       let message = "Ocurrió un error";
  //       setFactError(err.message || message)
  //     })
  // }, [])

  // useEffect(() => {
  //   if (!fact) return

  //   // const primerapalabra = fact.split(" ")[0] // primera palabra
  //   // const primeras3palabra = fact.split(" ").slice(0, 3).join(" ") // primeras 3 palabra
  //   const primeras3palabra = fact.split(" ", 3).join(" ") // primeras 3 palabra

  //   fetch(`https://cataas.com/cat/says/${primeras3palabra}?size=20&color=red&json=true`)
  //     .then(res => res.json())
  //     .then(response => {
  //       // console.log(response);
  //       const { url } = response
  //       // setImgUrl(`https://cataas.com/${url}`) // No hacer esto
  //       setImgUrl(url) // hacerlo directamente en la etiqueta img
  //     })
  // }, [fact])

  // const handleClick = () => {
  //   fetch(CAT_ENPOINT_RANDOM_FACT)
  //     .then(res => {
  //       console.log(res)
  //       if (!res.ok) throw new Error("Error fetching fact")
  //       return res.json()
  //     })
  //     .then(data => {
  //       const { fact } = data
  //       setFact(fact)
  //     })
  //     .catch((err) => {
  //       let message = "Ocurrió un error";
  //       setFactError(err.message || message)
  //     })
  // }

  // ----------tercera forma reutilizar logica => esta en la carpeta servicer facts.js----------
  useEffect(() => {
    getRandomFact() // áca estamos llamando al custom hook
      .then((data) => {
        // console.log(data)
        setFact(data)
      })
      .catch((err) => {
        let message = "Ocurrió un error";
        setFactError(err.message || message)
      })
  }, [])


  // useEffect(() => { // Codigo utilizado en el custom hook
  //   if (!fact) return

  //   // const primerapalabra = fact.split(" ")[0] // primera palabra
  //   // const primeras3palabra = fact.split(" ").slice(0, 3).join(" ") // primeras 3 palabra
  //   const primeras3palabra = fact.split(" ", 3).join(" ") // primeras 3 palabra

  //   fetch(`https://cataas.com/cat/says/${primeras3palabra}?size=20&color=red&json=true`)
  //     .then(res => res.json())
  //     .then(response => {
  //       // console.log(response);
  //       const { url } = response
  //       // setImgUrl(`https://cataas.com/${url}`) // No hacer esto
  //       setImgUrl(url) // hacerlo directamente en la etiqueta img
  //     })
  // }, [fact])

  const handleClick = () => {
    getRandomFact()
      .then((data) => {
        // console.log(data)
        setFact(data)
      })
      .catch((err) => {
        let message = "Ocurrió un error";
        setFactError(err.message || message)
      })
  }

  return (
    <main>
      <h1>App</h1>
      <button onClick={handleClick}>Obtener nuevo Fact</button>
      {fact && <p>{fact}</p>}
      {imgUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imgUrl}`} alt={`imagen extraida usando las primeras 3 palabras de ${fact}`} />}
      {factError && <p>{factError}</p>}
    </main >
  )
}

export default App