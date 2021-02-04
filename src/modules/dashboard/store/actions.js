import services from '@/http'
import * as types from './mutation-type'

export const ActionListProfiles = ({ dispatch }, payload) => {
  return services.register.create(payload).then(res => {
    dispatch('ActionSetUser', res.data.user)
  })
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_PROFILE, payload)
}
