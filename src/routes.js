import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Header from './components/Header';



function RoutesApp() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/filmes/:id' element={<Filmes />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;