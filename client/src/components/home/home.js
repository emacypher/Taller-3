import React from 'react';
import style from './home.module.css';
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom";

const Home = () => {
    var history = useHistory();
    return(
        <div>
        <div className={style.container} >
            <div  className={style.title}>
                <h1 >Ayuda Hardware</h1>
                <h2>Brindamos orientación sobre selección de piezas
           de computadora y compatibilidad.</h2>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={() => history.push("/")}>
                  Comienza con el armado
                </Button>
            </div>
        </div>
            <div  className={style.foro}>
               <h1>Proximamente el foro...</h1>
              
            </div>
        </div>

    )
}

export default Home;