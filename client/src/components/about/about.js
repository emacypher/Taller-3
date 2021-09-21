import React from 'react';
import style from './about.module.css';
import CardAlumn from './cardAlum/cardAlumn.js';

const About = () =>{
    return(
        <div className={style.container}>
            <h3>Somos Alumnos de 3º Año del IFTS Nº16</h3>
            <p><strong>Ayuda Hardware</strong> es nuestro proyecto para la materia de <strong>¨Taller de Prácticas de Desarrollo e Implementacion(TPDI)¨</strong>.</p>
            <p>Se trata de un sistema web el cual facilita el armado de una PC, proporciona la información de sus componentes de manera intuitiva y permite a sus usuarios participar en una red social propia dentro de un foro.</p>
            <h3>Integrantes</h3>
            <div className={style.alumn}>
                <CardAlumn name="Emmanuel Baspino"/>
            </div>
            <div className={style.alumn}>
                <CardAlumn name="Abel Correa"/>
            </div>
            
        </div>
    )
}

export default About;