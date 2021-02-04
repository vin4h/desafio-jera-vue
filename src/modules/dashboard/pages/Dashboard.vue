<template>
  <div class="dashboard">
    <template>

      <div class="card card1">
        <div class="card-header">
          Olá {{ user.name }}
        </div>
          <div class="card-body">
            <div class="card card-profile" v-for="profile in user.profiles" :key="profile.id">
              <div class="card-header">Perfil</div>
              <div class="card-body">
                {{ profile.name }}
              </div>
              <div class="card-footer">
                <route-link to="/movies">
                  <button class="btn btn-primary">Acessar</button>
                </route-link>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-success w-30">Cadastrar</button>
            <router-link to="/">
              <button @click="logout" class="btn btn-danger w-30">Logout</button>
            </router-link>
          </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
    profilesUser: []
  }),
  methods: {
    ...mapActions('auth', ['ActionSignOut']),
    logout () {
      this.ActionSignOut()
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  }
}
</script>

<style scoped lang="scss">
.dashboard{
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

.card-profile{
  width: 20%;
  height: 40%;
  display: flex;
  float: left;

}
</style>
