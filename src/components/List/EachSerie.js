import { Link } from 'react-router-dom';
import '../../styles/layout/EachSerie.scss'

function EachSerie({ eachSerieProp }) {
  return (
    <Link to={'/serie/' + eachSerieProp.id} className='mainSection__link'>
      <li className='mainSection__each'>
        <h3 className="mainSection__each--title">
          {eachSerieProp.title}
        </h3>
        <img src={eachSerieProp.image} alt={eachSerieProp.title} title={eachSerieProp.title}
          className="mainSection__each--image" />
        <p className="mainSection__each--actors">
          Actores: {eachSerieProp.actors}
        </p>
        <p className="mainSection__each--rating">Puntuación: {eachSerieProp.rating}</p>
      </li>
    </Link>
  )
}
export default EachSerie;