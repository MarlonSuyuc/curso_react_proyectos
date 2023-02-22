import { useEffect, useState } from "react"

export function useCatImage({ fact }) {
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const primeras3palabra = fact.split(" ", 3).join(" ") // primeras 3 palabra

    fetch(`https://cataas.com/cat/says/${primeras3palabra}?size=50&color=red`, { mode: "no-cors" })
      .then(res => res.json())
      .then(response => {
        // console.log(response);
        const { url } = response
        // setImgUrl(`https://cataas.com/${url}`) // No hacer esto
        setImgUrl(url) // hacerlo directamente en la etiqueta img
      })
  }, [fact])

  return { imgUrl }
}