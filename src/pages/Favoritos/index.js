import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './favoritos.css'
import { toast } from "react-toastify";


function Favoritos() {
  const [filmes, setFilmes] = useState([])


  useEffect(() => {
    const minhaLista = localStorage.getItem('@primevideo')

    setFilmes(JSON.parse(minhaLista) || [])




  }, [])

  function excluirFilme(id) {

    let filtroFilmes = filmes.filter((item) => {
      return (item.id !== id)
    })

    setFilmes(filtroFilmes);
    localStorage.setItem('@primevideo', JSON.stringify(filtroFilmes))

    toast.success('Filme removido com sucesso')
  }

  return (
    <div className="meus-filmes">
      <h1>Favoritos</h1>
      {filmes.length === 0 && <span>Você não possui nenhum filme salvo</span>}

      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <span>{filme.title}</span>
              <div>
                <Link to={`/primevideo/filme/${filme.id}`}>Ver detalhe</Link>
                <button onClick={() => { excluirFilme(filme.id) }}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Favoritos;