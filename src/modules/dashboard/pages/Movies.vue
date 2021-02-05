<template>
  <div class="movies">
      <div class="card card1">
        <div class="card-header">
          Filmes
          <button class="btn btn-danger" @click.prevent="previousPageMovie(page)">Anterior</button>
          <button class="btn btn-success" @click.prevent="nextPageMovie(page)">Proximo</button>
          <router-link to="/dashboardmovies">
            <button class="btn btn-warning">Voltar</button>
          </router-link>
          <div class="search-box">
            <input type="text" class="search"  v-model="searchField">
            <button class="btn btn-primary" @click.prevent="search">Buscar</button>
          </div>
      </div>
      <div class="card-body" v-if="movies.results">
          <table class="table align-center m-0">
            <thead>
              <th>Titutlo</th>
              <th>Popularidade</th>
              <th>Assistir Depois</th>
              <th>Assistidos</th>
            </thead>
            <tbody>
              <tr v-for="movies in movies.results" :key="movies.id">
                <td> {{ movies.title }} </td>
                <td> {{ movies.popularity }} </td>
                <td> <button class="btn btn-success" @click.prevent="watched(movies)">Add. Assistir Depois</button> </td>
                <td> <button class="btn btn-primary" @click.prevent="toWatch(movies)">Add. Assistido</button> </td>

              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    searchField: ''
  }),
  methods: {
    ...mapActions('dashboard', ['findPageMovie', 'createWatched', 'createToWatch', 'findMovies']),
    async watched (movie) {
      try {
        await this.createWatched({
          id: movie.id,
          title: movie.title,
          genre_ids: movie.genre_ids,
          watched: true,
          profile_id: this.profile_id
        })

        alert('Adicionado com sucesso')
      } catch (err) {
        alert(err.data ? err.data.error : 'Não foi possível adicionar')
      }
    },
    async toWatch (movie) {
      try {
        await this.createToWatch({
          id: movie.id,
          title: movie.title,
          genre_ids: movie.genre_ids,
          to_watch: true,
          profile_id: this.profile_id
        })

        alert('Adicionado com sucesso')
      } catch (err) {
        alert(err.data ? err.data.error : 'Não foi possível adicionar')
      }
    },
    async nextPageMovie () {
      try {
        await this.findPageMovie(this.movies.page + 1)
      } catch (error) {
        alert('Não foi possivel ir para proxima pagina')
      }
    },
    async previousPageMovie () {
      try {
        await this.findPageMovie(this.movies.page - 1)
      } catch (error) {
        alert('Não foi possivel ir para pagina anterior')
      }
    },
    replaceItens (movies) {
      for (let i = 0; i < movies.length; i++) {
        this.itens.push({ Titulo: movies[i].title, popularidade: movies[i].popularity })
      }
    },
    async search () {
      if (this.searchField.length > 0) {
        await this.findMovies(this.searchField)
      } else {
        await this.findPageMovie(1)
      }
    }
  },
  computed: {
    ...mapState('dashboard', ['movies', 'profile_id']),
    rows () {
      this.replaceItens(this.movies.results)
      return this.movies.total_results
    }
  },
  watch: {
    linkPage: async (New, Old) => {
      await this.findPageMovie(New)
    }
  }
}
</script>

<style scoped lang="scss">
.movies{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-footer {
  display: flex;
  flex-direction: row;
}

.card1{
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;

}

.card-movies{
  width: 20%;
  height: 40%;
  display: flex;
  float: left;

}
</style>
