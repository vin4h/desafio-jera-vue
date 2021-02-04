<template>
<div>
  <b-button id="show-btn" class="btn btn-success btn-modal" @click="$bvModal.show('bv-modal-example')">Novo Perfil</b-button>
    <b-modal id="bv-modal-example" hide-footer>
      <template #modal-title>
        <code>Novo Perfil</code>
      </template>
      <form @submit.prevent="newProfile">
        <div class="d-block text-center">
          <input type="text" v-model="name" placeholder="Kids" required/>
        </div>
      <b-button class="mt-3 btn btn-success" type="submit" block >Cadastrar</b-button>
      <b-button class="mt-3 btn btn-danger" block @click="$bvModal.hide('bv-modal-example')">Voltar</b-button>
    </form>

  </b-modal>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    name: ''
  }),
  methods: {
    ...mapActions('dashboard', ['createProfile']),
    async newProfile () {
      try {
        await this.createProfile({ name: this.name })
        this.$bvModal.hide('bv-modal-example')
      } catch (err) {
        this.$bvModal.hide('bv-modal-example')
        alert(err.data ? err.data.error : 'Não foi possível fazer login')
      }
    }
  }
}

</script>
