import React from 'react'
import { Container } from 'react-bootstrap'
import "../Footer/Footer.css"

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
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </div>
            <div className="box-copyright">
                
                <p>Todos los derechos reservados © 2023
                    <b>Bootcamp udd Pablo Pavez</b>
                </p>
            </div>
            </div>
            

  )
};

export default Footer;