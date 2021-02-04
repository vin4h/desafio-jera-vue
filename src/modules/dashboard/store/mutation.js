import * as types from './mutation-type'

export default {
  [types.SET_PROFILE] (state, payload) {
    state.profiles = payload
  }

}
