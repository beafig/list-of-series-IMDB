/* SECCIÓN DE IMPORT: de React, componentes, SASS, imágenes*/

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import callToApi from '../services/api';
import '../styles/App.scss';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import List from './List/List';


/* SECCIÓN DEL COMPONENTE: variables de estado, efectos, funciones handler, funciones y variables para pintar el HTML y el HTML*/
function App() {

  const [allSeries, setAllSeries] = useState([])

  useEffect(() => {
    callToApi().then(cleanMovies => {
      console.log(cleanMovies);
      setAllSeries(cleanMovies)
    })
  }, [])


  return <div className="App">
    <Header />
    <main>

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/series' element={<List allSeriesProp={allSeries} />} />
      </Routes>
    </main>
    <Footer />
  </div>;
}

export default App;
