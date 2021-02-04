<template>
  <div class="dashboard">
    <template>
      <div class="card card1">
        <div class="card-header">
          <button class="btn btn-success w-30">Cadastrar</button>
          <button @click="logout" class="btn btn-danger w-30">Logout</button>
        </div>
          <div class="card-body">
            <div class="card card-profile" v-if="profiles.length > 0">
              <div class="card-header">Perfil</div>
              <div class="card-body"></div>
              <div class="card-footer">
                <button class="btn btn-success w-20">Entrar</button>
              </div>
            </div>
          </div>
          <div class="card-footer">

          </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    profiles: []
  }),
  methods: {
    logout () {

    }
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
}

.card-profile{
  width: 20%;
  height: 40%;
}
</style>
