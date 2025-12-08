import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Admin from '../layout/Admin'
import ProductsList from '../pages/ProductListing/ProductsList'
import SingleProduct from '../pages/ParticularProduct/SingleProduct'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Profile from '../pages/Info/Profile'
import NotFound from '../pages/Not-Found/NotFound'
import Admin_Panel from '../layout/AdminPanel'
import Dashboard from '../pages/Admin/Dashboard'
import Admin_Login from '../pages/Admin/admin-login/Admin-Login'

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} >
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/customer/:slug" element={<Profile />} />
      </Route>
      <Route path="/" element={<Admin_Panel />} >
        <Route path="admin-panel/*" element={<NotFound />} />
        <Route path="/admin-panel" element={<Admin_Login />} />
        <Route path="admin-panel/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default Approutes
