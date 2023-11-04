import Home from "./components/Home/Home";
import CartContent from "./components/CartContent/CartContent";
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MenSection from "./components/Paguinas/MenSection";
import WomenSection from "./components/Paguinas/WomenSection";
import SaleSection from "./components/Paguinas/SaleSection";


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Hombre' element={<MenSection />} />
          <Route path='/Mujer' element={<WomenSection />} />
          <Route path='/Juguetes' element={<SaleSection />} />
          <Route path='/cart' element={<CartContent />} />
          <Route path='/Footer' element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
