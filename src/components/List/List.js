import { Link } from 'react-router-dom';
import { useState } from 'react';

// import callToApi from '../../services/api';
import EachSerie from './EachSerie';
import Form from '../Form/Form';
import data from '../../data/data.json'

import '../../styles/layout/List.scss'

function List() {

  // ESTADOS DE REACT
  const [allSeries] = useState(data)
  const [searchTitle, setSearchTitle] = useState('')
  const [searchYear, setSearchYear] = useState('all')

  // OBTENGO LOS DATOS DE UN API
  // useEffect(() => {
  //   callToApi().then(cleanMovies => {
  //     console.log(cleanMovies);
  //     setAllSeries(cleanMovies)
  //   })
  // }, [])

  // OBTENGO LOS DATOS DE UN FICHERO Y LOS LIMPIO
  const cleanSeries = allSeries.map(eachSerie => ({
    title: eachSerie.fullTitle,
    actors: eachSerie.crew,
    id: eachSerie.id,
    image: eachSerie.image,
    rating: eachSerie.imDbRating,
    year: eachSerie.year,
  }))


  // FUNCIÓN MANEJADORA DEL INPUT DE BUSCAR POR TÍTULO
  const handleInputTitleLift = (value) => {
    setSearchTitle(value)
  }

  // FUNCIÓN MANEJADORA DEL SELECT DE BUSCAR POR AÑO

  const handleInputYearLift = (value) => {
    setSearchYear(value)
  }

  // FILTRO LAS SERIES POR TÍTULO
  const filterSeries = cleanSeries
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

  // HAGO UN MAP PARA PASAR LOS DATOS DE CADA SERIE Y PINTARLOS
  const htmlSeries = filterSeries.map(eachSerie => {
    return <EachSerie key={eachSerie.id} eachSerieProp={eachSerie} />;
  })

  // OBTENGO UN ARRAY CON LOS AÑOS DE TODAS LAS SERIES
  const yearSerie = cleanSeries.map(eachSerie => {
    return eachSerie.year
  })

  //LIMPIO EL ARRAY DE AÑOS ELIMINANDO DUPLICADOS y LO ORDENO CON .SORT()
  const cleanYear = yearSerie
    .filter((item, index) => {
      return yearSerie.indexOf(item) === index;
    })
    .sort((a, b) => b - a)

  return (
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
      />
      <ul className='mainSection__list'>
        {htmlSeries}
      </ul>
    </section>
  )
}
export default List;