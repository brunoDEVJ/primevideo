import { Link } from "react-router-dom";

import './erro.css'

function Erro() {
  return (
    <div className="nao-encontrado">
      <h1>404</h1>
      <h2>Pagina não encontrada!</h2>
      <Link to='/'>Veja todos os Filmes</Link>
    </div>
  )
}

export default Erro;