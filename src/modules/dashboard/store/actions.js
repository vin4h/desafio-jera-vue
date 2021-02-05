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
    commit(types.SET_MOVIES, res.data)
  })
}

export const createWatched = ({ commit }, context, payload) => {
  return services.dashboard.createWatched(context)
}

export const createToWatch = ({ commit }, context, payload) => {
  return services.dashboard.createToWatch(context)
}

export const findAllMovies = async ({ commit }, context, payload) => {
  return await window._Vue.$http.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=ab49019e9117ee3ab19bb1fd5a1b332a')
    .then(res => {
      commit(types.SET_MOVIES, res.data)
    })
}

export const findPageMovie = async ({ commit }, context, payload) => {
  console.log(context)
  return await window._Vue.$http.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=ab49019e9117ee3ab19bb1fd5a1b332a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${context}`)
    .then(res => {
      commit(types.SET_MOVIES, res.data)
    })
}

export const findPageMovieRecommended = async ({ commit }, context, payload) => {
  console.log(context)
  return await window._Vue.$http.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=ab49019e9117ee3ab19bb1fd5a1b332a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${context.page}&with_genres=${context.genre_id}`)
    .then(res => {
      commit(types.SET_MOVIES, res.data)
    })
}

export const findMoviesRecommended = async ({ commit }, context, payload) => {
  return await window._Vue.$http.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=ab49019e9117ee3ab19bb1fd5a1b332a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${context.genre_id}&query=${context.title}`)
    .then(res => {
      commit(types.SET_MOVIES, res.data)
    })
}

export const getMaxGenreId = async ({ dispatch, commit }, context) => {
  return await services.dashboard.maxGenreId(context).then(res => {
    commit(types.SET_GENRE_ID, res.data)
    dispatch('getGenre', res.data)
  })
}

export const getGenre = async ({ commit }, context) => {
  return await window._Vue.$http.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=ab49019e9117ee3ab19bb1fd5a1b332a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${context}`).then(res => {
    commit(types.SET_MOVIES, res.data)
  })
}

export const findMovies = async ({ commit }, context, payload) => {
  console.log(context)
  return await window._Vue.$http.get(
    `https://api.themoviedb.org/3/search/movie?api_key=ab49019e9117ee3ab19bb1fd5a1b332a&language=en-US&query=${context}&page=1&include_adult=false`)
    .then(res => {
      commit(types.SET_MOVIES, res.data)
    })
}

export const getToWatch = ({ commit }, context, payload) => {
  return services.dashboard.toWatch(context).then(res => {
    commit(types.SET_MOVIES, res.data)
  })
}

export const createProfile = ({ dispatch }, context) => {
  return services.dashboard.createProfile(context).then(res => {
    dispatch('ActionFindUser', res.data)
  })
}
