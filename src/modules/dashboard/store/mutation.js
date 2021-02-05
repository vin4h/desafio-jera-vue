import * as types from './mutation-type'

export default {
  [types.SET_LOG_USER] (state, payload) {
    state.user = payload
  },
  [types.SET_PROFILE_ID] (state, payload) {
    state.profile_id = payload
  },
  [types.SET_MOVIES] (state, payload) {
    state.movies = payload
  },
  [types.SET_GENRE_ID] (state, payload) {
    state.genre_id = payload
  }
}
