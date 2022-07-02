import axios from 'axios';

const API_KEY = 'api_key=4ff5f56349631065c2412c68509ec04d';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const GENEROS = BASE_URL + '/genre/movie/list?'+API_KEY+'&language=pt-BR';
const LANCAMENTOS_URL = BASE_URL + '/movie/now_playing?'+API_KEY+'&language=en-US';
const GENEROS_MOVIES = API_URL + '&with_genres='
const SEARCH_URL = BASE_URL + '/search/movie?'+API_KEY;
const TOP_RATED_URL = BASE_URL + '/movie/top_rated?'+API_KEY+'&language=en-US&page=1';


export async function movies_lista(){
  let movies = [];
  let errors = [];
  axios.get(API_URL)
  .then(response => {
    movies.push(response.data.results)
  })
  .catch(e => {
    errors.push(e)
  });
  return movies;
}

export async function url_imagem(){
  return IMG_URL;
}  

export async function generos_lista(){
  let generos = []
  let errors = [];
  axios.get(GENEROS)
    .then(response => {
      generos.push(response.data.genres)
    })
    .catch(e => {
      errors.push(e)
  });
  return generos;
}

export async function lancamentos_filmes() {
  let movies = [];
  let errors = [];
  axios.get(LANCAMENTOS_URL)
    .then(response => {
      movies.push(response.data.results)
    })
    .catch(e => {
      errors.push(e)
    })   
  return movies;  
}

export async function get_movies_genero(genero_id) {
  let movies = [];
  let errors = [];
  axios.get(GENEROS_MOVIES+genero_id)
    .then(response => {
      movies.push(response.data.results)
    })
    .catch(e => {
      errors.push(e)
    })
  return movies;  
}  

export async function top10() {
  let movies = [];
  let errors = [];
  axios.get(TOP_RATED_URL)
    .then(response => {
      movies.push(response.data.results)
    })
    .catch(e => {
      errors.push(e)
    })
  return movies;
}

export async function get_buscar_movie(nome_filme) {
  let movies = [];
  let errors = [];
  if (nome_filme.length >= 3) {
    axios.get(SEARCH_URL+'&query='+nome_filme)
      .then(response => {
        movies.push(response.data.results)
      })
      .catch(e => {
      errors.push(e)
    })
    return movies;
  }
}  