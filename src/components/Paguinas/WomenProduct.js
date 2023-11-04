import { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";
import "./MenSection.css";

const WomenProduct = () => {
  const [data, setData] = useState([]);
  const { buyProducts } = useContext(dataContext);

  useEffect(() => {
    axios("WomenProduct.json").then((res) => setData(res.data));
  }, []);

  return data.map((product) => {
    return (
      <div className='card' key={product.id}>
        <img src={product.img} alt='img-product-card' className='product-image' />
        <h3>{product.name}</h3>
        <h4>{product.descripcion}</h4>
        <h4>{product.talla}</h4>
        <h4>${product.price}</h4>
        <button onClick={() => buyProducts(product)}>Comprar</button>
      </div>
    );
  });
};

export default WomenProduct;