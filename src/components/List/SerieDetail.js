import { Link, useParams } from 'react-router-dom';
import '../../styles/layout/SerieDetail.scss'

function SerieDetail({ findSerieP }) {
  const obj = useParams()
  const serieId = obj.id

  const serieFound = findSerieP(serieId)

  return (
    <>
      <section className="detailSection">
        <Link to='/series' >
          <input type="button" value="Volver" className='detailSection__btn' />
        </Link>
        <div className="detail">
          <img src={serieFound.image} alt={serieFound.title} title={serieFound.title}
            className="detail__image" />
          <div className="detail__container">
            <h3 className="detail__title">
              {serieFound.title}
            </h3>
            <p className="detail__actors">
              Actores: {serieFound.actors}
            </p>
            <p className="detail__rating">Puntuación: {serieFound.rating}</p>
          </div>
        </div>
      </section>
    </>
  )
}
export default SerieDetail;