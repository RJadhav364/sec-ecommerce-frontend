import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Admin from '../layout/Admin'
import ProductsList from '../pages/ProductListing/ProductsList'
import SingleProduct from '../pages/ParticularProduct/SingleProduct'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Profile from '../pages/Info/Profile'

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} >
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default Approutes
