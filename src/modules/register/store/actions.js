import services from '@/http'
import * as types from './mutation-type'

export const ActionDoRegister = (context, payload) => {
  return services.register.create(payload)
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}
