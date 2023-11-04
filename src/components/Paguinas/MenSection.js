import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'; 
import './MenSection.css';

import MenProduct from './MenProduct';

const MenSection = () => {
  return (
    <div>
      <Navbar />
      <h1>Nuevos Siluetas </h1>
        <p>"Estilo que Deja Huella: Descubre la Distinción en Cada Paso"</p>
      <div className='product-card-container'>
        <MenProduct/>
      </div>
      <Footer /> 
    </div>
  );
};

export default MenSection;
