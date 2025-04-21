import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Admin from '../layout/Admin'

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} >
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Approutes
