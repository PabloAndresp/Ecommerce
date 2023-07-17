import React from 'react'
import { Container } from 'react-bootstrap'
import "../Footer/Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer () {
  return (
    
    <div className="container-footer">
            <div className="box-footer">
                <h2>Atención al cliente</h2>
                <a href="#">Envíos</a>
                <a href="#">Metodos de pago</a>
                <a href="#">Cambios y devoluciones</a>
                <a href="#">Preguntas frecuentes</a>
            </div>
            <div className="box-footer">
                <h2>Compañia</h2>
                <a href="#">Nosotros</a>
                <a href="#">Empleo</a>
                <a href="#">Procesos</a>
                <a href="#">Servicios</a>
            </div>
            <div className="box-footer">
                <h2>Contacto</h2>
                <a href="#">Nuestras tiendas</a>
                <a href="#">Novedades</a>
                <a href="#">Promociones especiales</a>
                <a href="#">Partners</a>
            </div>
            <div className="box-footer">
                <h2>Redes sociales</h2>
                <a href="#"><InstagramIcon /></a>
                <a href="#"><TwitterIcon /></a>
                <a href="#"><FacebookIcon /></a>
                <a href="#"><LinkedInIcon /></a>
            </div>
            
            </div>
            

  )
};

export default Footer;