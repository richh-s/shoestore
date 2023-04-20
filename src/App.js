import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"

import Navbar from "./components/navbar/Navbar";
import Shop from "./pages/shop/Shop";
import ShopContextProvider from "./context/ShopContext";
function App() {
  return (
    <ShopContextProvider>
       <BrowserRouter>
  
    <Routes>
       <Route path="/" >
          <Route index element={<Home/>}/>
       </Route>
       <Route path="shoes" element={<Shop/>}/>
    </Routes>
      
    </BrowserRouter>
    </ShopContextProvider>
   
    
  );
}

export default App;
