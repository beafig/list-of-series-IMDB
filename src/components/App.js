/* SECCIÓN DE IMPORT: de React, componentes, SASS, imágenes*/

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import List from './List/List';
import SerieDetail from './List/SerieDetail';
import data from '../data/data.json'
import Favourites from './Favourites/Favourites';


/* SECCIÓN DEL COMPONENTE: variables de estado, efectos, funciones handler, funciones y variables para pintar el HTML y el HTML*/
function App() {
  const [allSeries] = useState(data)

  const cleanSeries = allSeries.map(eachSerie => ({
    title: eachSerie.fullTitle,
    actors: eachSerie.crew,
    id: eachSerie.id,
    image: eachSerie.image,
    rating: eachSerie.imDbRating,
    year: eachSerie.year,
  }))

  const findSerie = (serieId) => {
    const serieFound = cleanSeries.find(eachSerie =>
      eachSerie.id === serieId
    )
    return serieFound
  }


  return <div className="App">
    <Header />
    <main>

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/series/' element={<List cleanSeriesP={cleanSeries} />} />
        <Route path='/serie/:id' element={<SerieDetail findSerieP={findSerie} />} />
      </Routes>
    </main>
    <Footer />
  </div>;
}

export default App;
