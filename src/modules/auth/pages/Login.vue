<template>
    <form v-on:submit.prevent="submitLogin()">
      <div class="login-page">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <div class="form-group">
                <input type="text" v-model="form.email" class="form-control" placeholder="E-mail" required/>
              </div>
              <div class="form-group">
                <input type="password" v-model="form.password" class="form-control" placeholder="Password" required/>
              </div>
              <button native-type="submit" class="btn btn-primary w-50">Entrar</button>
              <router-link to="/register">
                <button type="button" class="btn btn-danger w-50 mr-30">Cadastrar</button>
              </router-link>
            </div>
          </div>
      </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    async submitLogin () {
      try {
        await this.ActionDoLogin(this.form)

        this.$router.push({ name: 'dashboard' })
      } catch (err) {
        alert(err.data ? err.data.error : 'Não foi possível fazer login')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card{
  width: 30%;
}

.alert{
  display: none;
}
</style>
