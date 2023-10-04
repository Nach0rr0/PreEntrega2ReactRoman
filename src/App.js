import Home from "./components/Home/Home";
import CartContent from "./components/CartContent/CartContent";
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hombre from "./components/Paguinas/Hombre";
import Mujer from "./components/Paguinas/Mujer";
import Sale from "./components/Paguinas/Sale";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Hombre" component={Hombre} />
        <Route path="/Mujer" component={Mujer} />
        <Route path="/Sale" component={Sale} /> 
        <Route path='/cart' element={<CartContent />} />
        <Route path='/Footer' element={<Footer />} />

        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
