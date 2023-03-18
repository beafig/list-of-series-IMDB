import { Link } from 'react-router-dom';
import '../../styles/layout/Landing.scss'

function Landing() {
  return (
    <section className='landing'>
      <h3 className="landing__text">Bienvenides</h3>
      <div className="landing__container">
        <Link to='/series' >
          <input type="button" value="Ver todas las series" className='landing__btn' />
        </Link>
        <Link to="/favourites">
          <input type="button" value="Ver series favoritas" className='landing__btn' />
        </Link>
      </div>
    </section>
  )
}
export default Landing;