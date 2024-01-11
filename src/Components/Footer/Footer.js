import React from 'react';
import '../Footer/Footer.css';
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="column">
          <div>
             <img className="logo" src="../assets/Imagenes/logonegro.png" alt="Factoria F5" /> 
          </div>
          <p>Somos y Factoria F5</p>
          <p>Calle Fernando Poo 25</p>
          <p>Madrid, 28045</p>
        </div>
        <div className="column">
          <Nav.Link href="/"><strong>Home</strong></Nav.Link>
          <Nav.Link href="https://www.factoriaf5.org/somos" target="_blank"><strong>Factoria F5</strong></Nav.Link>
          <Nav.Link href="https://www.somosf5.org/about" target="_blank"><strong>Somos F5</strong></Nav.Link>
          <Nav.Link href="/Contact"><strong>Contacto</strong></Nav.Link>
        </div>
        <div className="column">
          <div>
            <img className="logo" src="../assets/Imagenes/logonaranja.png" href="/" alt="Segundo Logo" />
          </div>
          <div className="redes-sociales">
            <a href="/"><img src="../assets/Imagenes/Union.png" alt="Facebook" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 





