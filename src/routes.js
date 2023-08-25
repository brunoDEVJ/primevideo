import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Header from './components/Header';
import Erro from './pages/Erro';
import Favoritos from './pages/Favoritos';




function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/primevideo' element={<Home />} ></Route>
        <Route path='/primevideo/filme/:id' element={<Filmes />} ></Route>
        <Route path='/primevideo/favoritos' element={<Favoritos />}></Route>

        <Route path='*' element={<Erro />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;