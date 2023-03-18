import { Link } from 'react-router-dom';
import EachSerie from './EachSerie';

import '../../styles/layout/List.scss'

function List({ allSeriesProp }) {
  const htmlSeries = allSeriesProp.map(eachSerie => {
    return <EachSerie key={eachSerie.id} eachSerieProp={eachSerie} />;
  })

  return (
    <section className='mainSection'>
      <Link to='/' >
        <input type="button" value="Volver a inicio" className='mainSection__btn' />
      </Link>
      <ul className='mainSection__list'>
        {htmlSeries}
      </ul>
    </section>
  )
}
export default List;