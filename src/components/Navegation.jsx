import React from 'react'
import  {Link}  from 'react-router-dom';
import Balon from './Balon';
import Bayer from './Bayer';
import Champions from './Champions';
import Leopardo from './Leopardo';
import Liver from './Liver';

const Navegation = () => {
  return (
    <div>
        <Link to="/balon">
            <figure>
                <Balon/>
                <figcaption>Un balon :o</figcaption>
            </figure>
        </Link>
        <Link to="bayer">
            <figure>
                <Bayer/>
                <figcaption>Bayer de munich</figcaption>             
            </figure>
        </Link>
        <Link to="champions">
            <figure>
                <Champions/>
                <figcaption>Champions trofeo</figcaption>
            </figure>
        </Link>
        <Link to="leopardo">
            <figure>
                <Leopardo />
                <figcaption>Leopardo lindo</figcaption>

            </figure>
        </Link>
        <Link to="liver">
            <figure>
                <Liver/>
                <figcaption>Lucho diaz</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navegation