<template>
    <form @submit.prevent="submit()">
      <div class="login-page">
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
              <router-link to="/login">
                <button type="button" class="btn btn-success w-50 mr-30">Login</button>
              </router-link>
            </div>
          </div>
      </div>
    </form>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: '',
      password: '',
      name: '',
      birthDate: '',
      facebook_id: null
    }
  }),
  methods: {
    submit () {
      console.log(this.form)
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
</style>
