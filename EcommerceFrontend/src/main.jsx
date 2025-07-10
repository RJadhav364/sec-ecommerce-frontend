import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./components/ScrollToTop.jsx"



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <BrowserRouter>
    <ScrollToTop />
    <App />
    </BrowserRouter>
  <ToastContainer />
  </>
    //  {/* <ToastContainer /> */}
  //  </React.StrictMode>,
  // <div className='text-white'>
  // Rohan</div>
)
