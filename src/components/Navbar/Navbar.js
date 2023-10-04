import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import TotalItems from "../CartContent/TotalItems";

import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <Link to={"/"}>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0UYDYzSbYDQJ9WdJJajQRt9xEvqd86RqSASAiMgQ5aMdOpjJ" 
            alt="Shop Logo"
            className='navbar-logo'
          />
        </Link>
 
        <Link to={"/"}>
        <div className="Paguinas">
          <Link to={"/Hombre"} className="nav-link">
            Hombre
          </Link>
          <Link to={"/Mujer"} className="nav-link">
            Mujer
          </Link>
          <Link to={"/Sale"} className="nav-link">
            Sale
          </Link>
        </div>
        </Link>


        <Link className='seeCarrito' to={"/cart"}>
        
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGAL8QFG9pLRbSo_W1pZQwbwGu5_6oJV0p5TRGY4bvu7NutzkR" 
            alt="Logo Shop"
            className='navbar-shop'
          />
          {cart.length > 0 ? <TotalItems /> : null}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
