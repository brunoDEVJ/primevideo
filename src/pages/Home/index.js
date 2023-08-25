import api from '../../services/api'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import './Home.css'


function Home() {

  const [filmes, setFilmes] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    async function carregarFilmes() {
      const resposta = await api.get("movie/now_playing", {
        params: {
          api_key: 'b51076cf0ec17be73fc521ffdeeee229',
          language: 'pt-BR',
          page: 1
        }
      })

      setFilmes(resposta.data.results.slice(0, 10))
      setCarregando(false)
    }

    carregarFilmes()
  }, [])

  if (carregando) {
    return (
      <div className="carregando">
        <h2>Carregando filmes</h2>
      </div>
    )
  }


  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/primevideo/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home;