import { BrowserRouter , Routes,Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";

function App(){
  return(
    <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens"/>} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens"/>} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>} />
        <Route path="/product" element={<Product/>}>
          <Route path="/product/:productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={<LoginSignUp/>} />
      </Routes>
       <Footer/>
      </BrowserRouter>  
    </div>
  );
}
export default App;