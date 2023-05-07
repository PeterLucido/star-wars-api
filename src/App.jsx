import { Route, Routes } from 'react-router-dom'
import Starships from './pages/Ships/Starships'
import StarshipDetails from './components/ShipDetails/StarshipDetails'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/starships' element={<Starships />} />
        <Route path='/starships/:starshipId' element={<StarshipDetails />} />
      </Routes>
    </>
  )
}

export default App
