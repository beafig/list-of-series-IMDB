import { Link } from 'react-router-dom';
import { useState } from 'react';

// import callToApi from '../../services/api';
import EachSerie from './EachSerie';
import Form from '../Form/Form';
import '../../styles/layout/List.scss'



function List({ cleanSeriesP }) {

  // ESTADOS DE REACT

  const [searchTitle, setSearchTitle] = useState('')
  const [searchYear, setSearchYear] = useState('all')
  const [searchRating, setSearchRating] = useState('all')
  // const [errorMsg, setErrorMsg] = useState('')

  // OBTENGO LOS DATOS DE UN API
  // useEffect(() => {
  //   callToApi().then(cleanMovies => {
  //     console.log(cleanMovies);
  //     setAllSeries(cleanMovies)
  //   })
  // }, [])

  // OBTENGO LOS DATOS DE UN FICHERO Y LOS LIMPIO


  // FUNCIÓN MANEJADORA DEL INPUT DE BUSCAR POR TÍTULO
  const handleInputTitleLift = (value) => {
    setSearchTitle(value)
  }

  // FUNCIÓN MANEJADORA DEL SELECT DE BUSCAR POR AÑO

  const handleInputYearLift = (value) => {
    setSearchYear(value)
  }

  //FUNCIÓN MANEJADORA DEL RADIO DE BUSCAR POR PUNTUACIÓN
  const handleClickRadioLift = (id) => {
    setSearchRating(id)
  }

  // FILTRO LAS SERIES POR TÍTULO
  const filterSeries = cleanSeriesP
    .filter(eachSerie => {
      return eachSerie.title.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase())
    })
    .filter(eachSerie => {
      if (searchYear === 'all') {
        return true
      } else {
        return eachSerie.year === searchYear
      }
    })
    .filter(eachSerie => {
      if (searchRating === 'all') {
        return true
      } else {
        return Math.round(eachSerie.rating) === parseInt(searchRating)
      }
    })

  // HAGO UN MAP PARA PASAR LOS DATOS DE CADA SERIE Y PINTARLOS
  const htmlSeries = filterSeries.map(eachSerie => {
    return <EachSerie key={eachSerie.id} eachSerieProp={eachSerie} />;
  })

  // OBTENGO UN ARRAY CON LOS AÑOS DE TODAS LAS SERIES
  const yearSerie = cleanSeriesP.map(eachSerie => {
    return eachSerie.year
  })

  //LIMPIO EL ARRAY DE AÑOS ELIMINANDO DUPLICADOS y LO ORDENO CON .SORT()
  const cleanYear = yearSerie
    .filter((item, index) => {
      return yearSerie.indexOf(item) === index;
    })
    .sort((a, b) => b - a)

  //OBTENGO UN ARRAY CON TODAS LAS PUNTUACIONES y LO ORDENO CON .SORT()
  const ratingSerie = cleanSeriesP
    .map(eachSerie => {
      return Math.round(eachSerie.rating)
    })
    .sort((a, b) => b - a)

  //LIMPIO EL ARRAY DE PUNTUACIONES ELIMINANDO DUPLICADOS 
  const cleanRating = ratingSerie
    .filter((item, index) => {
      return ratingSerie.indexOf(item) === index;
    })

  //


  return (
    <>
      <section className='mainSection'>
        <Link to='/' >
          <input type="button" value="Volver a inicio" className='mainSection__btn' />
        </Link>
        <Form
          handleInputTitleLift1={handleInputTitleLift}
          searchTitleP={searchTitle}
          handleInputYearLift1={handleInputYearLift}
          cleanYearP={cleanYear}
          searchYearP={searchYear}
          handleClickRadioLift1={handleClickRadioLift}
          cleanRatingP={cleanRating}
          searchRatingP={searchRating}
        />
        <ul className='mainSection__list'>
          {htmlSeries}
        </ul>
      </section>

    </>
  )
}
export default List;