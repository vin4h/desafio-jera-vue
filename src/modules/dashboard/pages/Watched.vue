<template>
  <div class="card">
    <div class="card-header">Filmes Assistidos</div>
    <div class="card-body">
      <div id="app" class="col-sm-12">
        <div class="offset">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Genero</th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="movie in watched" :key="movie.id">
            <td>{{movie.title}}</td>
            <td>{{movie.genre}}</td>
          </tr>
          </tbody>
        </table>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <button type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </button>
              </li>
              <li class="page-item">
                <button type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber" :key="pageNumber"> {{pageNumber}} </button>
              </li>
              <li class="page-item">
                <button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  <div class="card-footer">
    <router-link to='/movies'>
      <button class="btn btn-warning">Voltar</button>
    </router-link>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    page: 1,
    perPage: 9,
    pages: [],
    list: []
  }),
  methods: {
    setPages () {
      const numberOfPages = Math.ceil(this.$data.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },
    paginate (list) {
      const page = this.page
      const perPage = this.perPage
      const from = (page * perPage) - perPage
      const to = (page * perPage)
      return list.slice(from, to)
    }
  },
  computed: {
    ...mapState('dashboard', ['watched']),
    displayedPosts () {
      return this.paginate(this.posts)
    }
  },
  watch: {
    posts () {
      this.setPages()
    }
  },
  created () {
    this.watched()
  },
  filters: {
    trimWords (value) {
      return value.split(' ').splice(0, 20).join(' ') + '...'
    }
  }
}
</script>

<style lang="scss">
button.page-link {
  display: inline-block;
}
button.page-link {
    font-size: 20px;
    color: #29b3ed;
    font-weight: 500;
}
.offset{
  width: 500px !important;
  margin: 20px auto;
}
</style>
