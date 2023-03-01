const CAT_ENPOINT_RANDOM_FACT = "https://catfact.ninja/fact"

export const getRandomFact = () => {
  return fetch(CAT_ENPOINT_RANDOM_FACT)
    .then(res => {
      // console.log(res)
      if (!res.ok) throw new Error("Error fetching fact")
      return res.json()
    })
    .then(data => {
      const { fact } = data
      return fact
    })
}
