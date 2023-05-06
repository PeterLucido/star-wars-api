import { Route, Routes } from 'react-router-dom'
import 
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'

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
