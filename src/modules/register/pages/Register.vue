<template>
    <form @submit.prevent="submit()">
      <div class="register-page">
            <div class="card">
              <div class="card-header">Register</div>
              <div class="card-body">
                <div class="form-group">
                  <input type="text" v-model="form.email" class="form-control" placeholder="E-mail" required/>
                </div>
                <div class="form-group">
                  <input type="password" v-model="form.password" class="form-control" placeholder="Password" required/>
                </div>
                <div class="form-group">
                  <input type="text" v-model="form.name" class="form-control" placeholder="Vinicius Freitas" required/>
                </div>
                <div class="form-group">
                  <input type="date" v-model="form.birthDate" class="form-control" placeholder="26/12/1995" required/>
                </div>
                <button class="btn btn-primary w-50">Registrar</button>
                <router-link to="/">
                  <button type="button" class="btn btn-success w-50 mr-30">Login</button>
                </router-link>
              </div>
              <div class="card-footer">
                <v-facebook-login app-id="448197289708187" @sdk-init="handleSdkInit" @login="onLogin" @logout="onLogout" v-model="model"></v-facebook-login>
              </div>
            </div>
      </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
import VFacebookLogin from 'vue-facebook-login-component'

export default {
  data: () => ({
    form: {
      email: '',
      password: '',
      name: '',
      birthDate: '',
      facebook_id: null
    },
    FB: {},
    model: {},
    scope: {}
  }),
  methods: {
    ...mapActions('register', ['ActionDoRegister', 'ActionSetUser']),
    async submit () {
      try {
        await this.ActionDoRegister(this.form)

        this.$router.push({ name: 'login' })

        alert('Cadastrado com sucesso')
      } catch (err) {
        alert(err.data ? err.data.error : 'Não Foi possível fazer seu cadastro')
      }
    },
    handleSdkInit ({ FB, scope }) {
      this.FB = FB
      this.scope = scope
    },
    async onLogin () {
      await this.FB.api('me', 'GET', { fields: 'id,name,email' },
        userInformation => {
          this.form.email = userInformation.email
          this.form.name = userInformation.name
          this.form.facebook_id = userInformation.id
          this.form.birthDate = userInformation.birthday
        }
      )
    },
    onLogout () {
      this.form.email = ''
      this.form.name = ''
      this.form.facebook_id = ''
      this.form.birthDate = ''
    }
  },
  components: {
    VFacebookLogin
  }
}
</script>

<style scoped lang="scss">
.register-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card{
  width: 30%;
}

.card-footer{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
