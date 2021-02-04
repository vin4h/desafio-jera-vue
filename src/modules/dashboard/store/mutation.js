import * as types from './mutation-type'

export default {
  [types.SET_LOG_USER] (state, payload) {
    state.user = payload
  },
  [types.SET_PROFILE_ID] (state, payload) {
    state.profile_id = payload
  },
  [types.SET_WATCHED] (state, payload) {
    state.watched = payload
  },
  [types.SET_WATCHLIST] (state, payload) {
    state.watchlist = payload
  }
}
