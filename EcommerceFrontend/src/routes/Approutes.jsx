import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Admin from '../layout/Admin'
import ProductsList from '../pages/ProductListing/ProductsList'
import SingleProduct from '../pages/ParticularProduct/SingleProduct'

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} >
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Route>
    </Routes>
  )
}

export default Approutes
