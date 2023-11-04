import React from 'react';
import Navbar from '../Navbar/Navbar'; 
import Footer from '../Footer/Footer'; 
import './MenSection.css';

import WomenProduct from './WomenProduct';

const WomenSection = () => {
  return (
    <div>
      <Navbar />
      <h1>Nueva Coleccion Primavera-Verano</h1>
        <p>"Camina con Elegancia: Tu Pasión por la Moda en Cada Paso de la Primavera a Verano"</p>
      <div className='product-card-container'>
        <WomenProduct/>
      </div>
      <Footer /> 
    </div>
  );
};

export default WomenSection;
