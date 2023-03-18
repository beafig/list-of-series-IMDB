import { Link } from 'react-router-dom';
import '../../styles/layout/Favourites.scss'

function Favourites() {
  return (
    <section className='favSection'>
      <Link to='/' >
        <input type="button" value="Volver a inicio" className='favSection__btn' />
      </Link>
      <h2 className='favSection__title'>En proceso</h2>
      <img className='favSection__img' src="https://i.makeagif.com/media/8-31-2013/tD2c90.gif" alt="gif hombre tira PC" />
    </section>
  )
}
export default Favourites;