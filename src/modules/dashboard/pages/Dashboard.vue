<template>
  <div class="dashboard">
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
                <router-link to="/dashboardmovies">
                  <button class="btn btn-primary" @click="selectProfile(profile.id)">Acessar</button>
                </router-link>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <Modal />
            <router-link to="/">
              <button @click="logout" class="btn btn-danger w-30">Logout</button>
            </router-link>
          </div>
      </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Modal from '../../../components/modal/Modal'

export default {
  data: () => ({
    name: ''
  }),
  methods: {
    ...mapActions('auth', ['ActionSignOut']),
    ...mapActions('dashboard', ['ActionFindUser', 'SetSelectProfileId']),
    logout () {
      this.ActionSignOut()
    },
    load () {
      this.ActionFindUser()
    },
    selectProfile (profileId) {
      this.SetSelectProfileId(profileId)
    }
  },
  computed: {
    ...mapState('dashboard', ['user'])
  },
  mounted () {
    this.load()
  },
  components: {
    Modal
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
.card-footer {
  display: flex;
  flex-direction: row;
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
