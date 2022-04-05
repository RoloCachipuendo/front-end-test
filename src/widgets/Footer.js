import { domainSis } from 'configurations/constant';
import React from 'react';

//estilos
import '../assets/css/base.css'

const Footer = () => {
    const date = new Date();
    return (
        <>{window.location.hostname === domainSis ?

            null
            :
            <footer >
                Derechos Reservados  RECA &copy; {date.getFullYear()}
            </footer>
        }
        </>
    );
}

export default Footer;