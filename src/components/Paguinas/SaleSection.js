import React from 'react';
import Navbar from '../Navbar/Navbar'; 
import Footer from '../Footer/Footer'; 
import './MenSection.css';

import SaleProduct from './SaleProduct';

const SaleSection = () => {
  return (
    <div>
      <Navbar />
      <h1>Elegancia en Miniatura</h1>
        <p>"Descubre la Excelencia en Juegos: Donde Cada Juguete Cuenta una Historia de Lujo"</p>
      <div className='product-card-container'>
        <SaleProduct/>
      </div>
      <Footer /> 
    </div>
  );
};

export default SaleSection;
