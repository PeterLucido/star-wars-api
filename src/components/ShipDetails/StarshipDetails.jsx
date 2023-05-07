import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getStarshipDetails } from "../../services/sw-api"
import { Link } from 'react-router-dom'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarshipDetails(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [starshipId])

  if (!starshipDetails.name) return <h1>Loading Starship Details...</h1>

  return (
    <main>
      <h1>Starship Details</h1>
      <div className='starship-container'>
      <h2>Name: {starshipDetails.name}</h2>
      <h3>Model: {starshipDetails.model}</h3>
      <div className='return'>
      <Link to={`/starships`}>Return</Link>
      </div>
      </div>
    </main>
  )
}

export default StarshipDetails