import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from '../../services/api'

import { toast } from 'react-toastify'

import './filme-info.css'


function Filmes() {
  const { id } = useParams();
  const navigate = useNavigate()

  const [filme, setFilme] = useState({})
  const [carregando, setCarregando] = useState(true)


  useEffect(() => {
    async function carregarFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: 'b51076cf0ec17be73fc521ffdeeee229',
          language: 'pt-BR',
        }
      })
        .then((r) => {
          setFilme(r.data)
          setCarregando(false)
        })
        .catch(() => {
          navigate('/', { replace: true })
          return
        })

    }
    carregarFilme()

    return () => {
      console.log('componente foi desmontado')
    }
  }, [navigate, id])

  function salvarFilme() {
    const minhaLista = localStorage.getItem('@primevideo')

    let filmesSalvar = JSON.parse(minhaLista) || [];

    const temFilme = filmesSalvar.some((filmeSalvo) => filmeSalvo.id === filme.id)

    if (temFilme) {
      toast.warn('Esse filme já esta salvo')
      return
    }

    filmesSalvar.push(filme)
    localStorage.setItem('@primevideo', JSON.stringify(filmesSalvar))
    toast.success('Filme Salvo com Sucesso')
  }


  if (carregando)
    return (
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    )
  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} / 10</strong>
      <div className="area-btn">
        <button onClick={salvarFilme}> salvar</button>
        <button> <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} target="blank" rel="external">Trailer</a></button>
      </div>
    </div>
  )
}

export default Filmes;