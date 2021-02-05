<template>
  <div class="movies">
    <div class="card card1">
      <div class="card-header">Filmes</div>
        <div class="card-body">
          <div class="card cards">
            <div class="card-header"></div>
            <div class="card-body">
              Filmes Assistidos
            </div>
                <div class="card-footer">
                  <button class="btn btn-primary" @click.prevent="watched">Acessar</button>
              </div>
          </div>
          <div class="card cards">
            <div class="card-header"></div>
            <div class="card-body">
              Filmes para assistir
            </div>
            <div class="card-footer">
              <button class="btn btn-primary" @click.prevent="toWatch">Acessar</button>
            </div>
          </div>
          <div class="card cards">
            <div class="card-header"></div>
            <div class="card-body">
              Recomendados
            </div>
            <div class="card-footer">
              <button class="btn btn-primary">Acessar</button>
            </div>
          </div>
          <div class="card cards">
            <div class="card-header"></div>
            <div class="card-body">
              Todos os filmes
            </div>
            <div class="card-footer">
              <button class="btn btn-primary">Acessar</button>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <router-link to="/dashboard">
            <button class="btn btn-warning">Voltar</button>
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions('dashboard', ['getWatched', 'getToWatch']),
    async watched () {
      await this.getWatched({ profile_id: this.profile_id })

      this.$router.push('/watched')
    },
    async toWatch () {
      await this.getToWatch({ profile_id: this.profile_id })

      this.$router.push('/towatch')
    }
  },
  computed: {
    ...mapState('dashboard', ['profile_id'])
  }
}
</script>

<style lang="scss" scoped>
.movies{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card1{
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;

}

.cards{
  width: 20%;
  height: 40%;
  display: flex;
  float: left;
  margin-left: 1%;
}

</style>
