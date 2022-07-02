<template>
 <div>
   <header>
    <div class="card">  
      <button @click="get_lancamentos()" type="button">{{user.nomebotao}}
        <i class="fas fa-rocket"></i>
      </button>
      <button @click="get_top10()" type="button">{{user.nomebotao_top}}
        <i class="fas fa-star"></i> 
      </button>
    </div>  

    <input type="text" @keydown="nome_filme = $event.target.value" 
      @input="get_value_buscar" placeholder="Buscar" id="search" class="search"/>  
    </header>

    <div id="tags" v-for="genero of generos" 
        :key="genero.id">
      <div id="tag" v-for="g of genero" 
        :key="g.id">
      <button type="button" @click="get_movies_gender(g.id)" :value="g.id" 
      class="tag">{{g.name}}</button>
      </div>
    </div>  

    <main id="main" v-for="movie of movies" 
      :key="movie.id">
        <div class="movie" v-for="m of movie" 
        :key="m.id">
          <Lista 
            :image_path="verify_image_present(m.backdrop_path)"
            :title="m.title"
            :vote_average="m.vote_average"
            :id="m.id"
            :overview="m.overview"/>
        </div>
    </main>

 </div>
</template>

<script>
import Lista from './components/Lista.vue';
import {movies_lista, url_imagem, generos_lista, get_buscar_movie, 
get_movies_genero, lancamentos_filmes, top10} from './servicos/Servicos';
 
export default {
 components: {
   Lista
  },
 data() {
   return {
     user: {
      nomebotao: 'Lançamentos',
      nomebotao_top: 'Top 10'
     },
     movies: '',
     generos: '',
     url_imagem: ''
   }
 },
 methods: {
    get_value_buscar() {
      get_buscar_movie(this.nome_filme).then(res => {
        this.movies = res
      });  
    },
    get_movies_gender(genero_id) {
      get_movies_genero(genero_id).then(res => {
        this.movies = res
      });
    },
    get_lancamentos() {
      lancamentos_filmes().then(res => {
        this.movies = res
      });  
    },  
    get_top10() {
      top10().then(res => {
        this.movies = res
      });  
    },  
    verify_image_present(imagem_principal){
      let imagem = this.url_imagem + imagem_principal
      if (imagem_principal === null) {
        imagem = "sem_imagem.jpg"
      }
      return imagem
    }
 },
 created() {
  movies_lista().then(res => {
    this.movies = res
  }),
  generos_lista().then(res => {
    this.generos = res
  }),
  url_imagem().then(res => {
    this.url_imagem = res
  })  
 }
}
</script>