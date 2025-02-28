import HomePage from './pages/HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Home from './pages/Admin/home';
import AdminAddProducts from './pages/Admin/AdminAddProducts';
import AdminUpdateProducts from './pages/Admin/AdminUpdateProducts';
import { CartProvider } from "react-use-cart";


function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route> 
          <Route path="/shop" element={<ShopPage/>}></Route> 
          <Route path="/adminProducts" element={<Home/>}></Route> 
          <Route path="/adminAddProducts" element={<AdminAddProducts/>}></Route> 
          <Route path="/adminUpdateProducts/:id" element={<AdminUpdateProducts/>}></Route> 
  
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
