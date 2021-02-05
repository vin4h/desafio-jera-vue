export default {
  loadSession: { method: 'post', url: 'sessions' },
  createProfile: { method: 'post', url: 'profiles' },
  watched: { method: 'post', url: 'watchedmovies/list' },
  createWatched: { method: 'post', url: 'watchedmovies' },
  toWatch: { method: 'post', url: 'watchlist/list' },
  createToWatch: { method: 'post', url: 'watchlist' }
}
