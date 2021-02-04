import services from '@/http'

import * as types from './mutation-type'

export const ActionFindUser = ({ dispatch }, payload) => {
  return services.dashboard.loadSession(payload).then(res => {
    dispatch('ActionSetUser', res.data.user)
  })
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_LOG_USER, payload)
}

export const SetSelectProfileId = ({ commit }, payload) => {
  commit(types.SET_PROFILE_ID, payload)
}

export const getWatched = ({ commit }, context, payload) => {
  return services.dashboard.watched(context).then(res => {
    commit(types.SET_WATCHED, res.data)
  })
}

export const createProfile = ({ dispatch }, context) => {
  return services.dashboard.createProfile(context).then(res => {
    dispatch('ActionFindUser', res.data)
  })
}
