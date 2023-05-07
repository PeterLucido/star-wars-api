import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllStarships } from '../../services/sw-api'

const Starships = () => {
  const [starships, setStarships] = useState([])

  function extractIdFromUrl(url) {
    const regex = /\/(\d+)\//
    const match = url.match(regex)
    return match ? match[1] : null
  }

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData)
    }
    fetchStarships()
  }, [])

  if (!starships.results) return <h1>Loading Starships...</h1>

  return (
    <>
      <h1>Star Ships</h1>
      <div className="container">
    {starships.results.map((starship) => {
      const starshipId = extractIdFromUrl(starship.url)
      return (
        <div className='starship-container' key={starship.name}>
          <Link to={`/starships/${starshipId}`}>{starship.name}</Link>
        </div>
      )
    })}
    </div>
    </>
  )
}

export default Starships
