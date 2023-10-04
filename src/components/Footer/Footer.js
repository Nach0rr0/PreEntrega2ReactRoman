import "./footer.css";

const Footer = () => {
  return (
    <footer>
    <div class="footer">
        <div class="container">
            <div class="row">
        
                <div class="footer-col-2">
                <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0UYDYzSbYDQJ9WdJJajQRt9xEvqd86RqSASAiMgQ5aMdOpjJ" 
            alt="Shop Logo"
            className='navbar-logo'/>
                            <p>Fresh Street, donde las zapatillas de lujo y la exclusividad se encuentran</p>
                </div>
                <div class="footer-col-4">
                    <h3>¡Síguenos en nuestras redes sociales!</h3>
                    
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            <p class="copyright">Copyright 2023 -Fresh Street  </p>
        </div>
    </div>

</footer>
  
  );
};

export default Footer;
