import services from '@/http'
import * as types from './mutation-type'

export const ActionDoRegister = ({ dispatch }, payload) => {
  return services.register.create(payload).then(res => {
    dispatch('ActionSetUser', res.data.user)
  })
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}
