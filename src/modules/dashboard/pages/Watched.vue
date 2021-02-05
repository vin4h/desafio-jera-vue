<template>
  <div class="card">
    <div class="card-header">Filmes Assistidos</div>
    <div class="card-body">
      <b-table
        id="my-table"
        :items="movies"
        :per-page="perPage"
        :current-page="currentPage"
        small>
      </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table">
        </b-pagination>
    </div>
  <div class="card-footer">
    <router-link to='/dashboardmovies'>
      <button class="btn btn-warning">Voltar</button>
    </router-link>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    perPage: 8,
    currentPage: 1
  }),
  computed: {
    ...mapState('dashboard', ['movies']),
    rows () {
      return this.movies.length
    }
  }
}
</script>
